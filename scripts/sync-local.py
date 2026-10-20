from pathlib import Path
import shutil,json
root=Path(__file__).resolve().parents[1];workspace=root.parent
shutil.copytree(workspace/'site-publish-home/dist',root/'home',dirs_exist_ok=True)
shutil.copytree(workspace/'kfc-site/app',root/'kfc/app',dirs_exist_ok=True)
shutil.copytree(workspace/'kfc-site/public',root/'kfc/public',dirs_exist_ok=True)
for rel in ['components/ui/button.tsx','lib/utils.ts']:
 dest=root/'kfc'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(workspace/'kfc-site'/rel,dest)
for f in (root/'kfc/app').iterdir():
 if f.suffix not in ['.js','.jsx','.ts','.tsx','.css']:continue
 s=f.read_text().replace('/assets/','/kfc/assets/').replace('/fonts/','/kfc/fonts/').replace("script.src='/case-footer.js", "script.src='/kfc/case-footer.js").replace("const HOME='https://iris-visual-portfolio.bowrainking.chatgpt.site/';","const HOME='/';")
 f.write_text(s)
for folder in [root/'home',root/'kfc/public']:
 f=folder/'case-footer.js';s=f.read_text();start=s.index(' const local=');end=s.index(' const current=',start)
 s=s[:start]+" const main=location.origin+'/';\n const kfc=main+'kfc/';\n"+s[end:];f.write_text(s)
f=root/'home/index.html';s=f.read_text().replace('https://iris-kfc-social-preview.bowrainking.chatgpt.site/','/kfc/');f.write_text(s)
f=root/'home/app.js';s=f.read_text().replace("link.href = 'http://localhost:8766/';","link.href = '/kfc/';");f.write_text(s)
pkg=json.loads((workspace/'kfc-site/package.json').read_text());pkg.update(name='iris-portfolio-preview',scripts={'build':'node scripts/build.mjs','dev':'vite --config vite.config.mjs','preview':'vite preview --host 127.0.0.1'})
(root/'package.json').write_text(json.dumps(pkg,indent=2)+'\n');shutil.copyfile(workspace/'kfc-site/pnpm-lock.yaml',root/'pnpm-lock.yaml')
