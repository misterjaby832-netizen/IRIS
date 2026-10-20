import {build} from 'vite';
import {execFileSync} from 'node:child_process';
import {cp,mkdir,readdir,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';
await build({configFile:path.resolve('vite.config.mjs')});
await mkdir('dist',{recursive:true});
await cp('home','dist',{recursive:true});
await cp('.kfc-build','dist/kfc',{recursive:true});
const files=[];
async function scan(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await scan(p);else{const s=await stat(p);files.push({file:p,size:s.size});}}}
await scan('dist');
const oversized=files.filter(f=>f.size>25*1024*1024);
if(oversized.length)throw Error('Cloudflare 单文件超过 25 MiB: '+JSON.stringify(oversized));
await writeFile('dist/_headers','/assets/*\n  Cache-Control: public, max-age=3600\n/kfc/assets/*\n  Cache-Control: public, max-age=3600\n/*.html\n  Cache-Control: no-cache\n');
console.log(`Ready: ${files.length} files, ${(files.reduce((s,f)=>s+f.size,0)/1024/1024).toFixed(1)} MiB; all assets below 25 MiB.`);

await writeFile('dist/deployment-info.json', JSON.stringify({commit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),builtAt:new Date().toISOString()}));
