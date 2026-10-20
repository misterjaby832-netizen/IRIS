(()=>{
 const variants=window.irisImageTiers||{};
 const phone=matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches;
 const landscape=matchMedia('(orientation:landscape)');
 let tier=landscape.matches?'landscape':'portrait';
 const subscribers=new Set(),images=new Map(),versions=new WeakMap(),probes=new WeakMap();
 const jobs=[];let running=0;
 const key=src=>{try{return decodeURI(new URL(src,document.baseURI).pathname);}catch{return src;}};
 const originals=Object.fromEntries(Object.entries(variants).flatMap(([base,pair])=>Object.values(pair).map(path=>[path,base])));
 const source=src=>phone?(variants[originals[key(src)]||key(src)]?.[tier]||src):(originals[key(src)]||src);
 const cancel=image=>{versions.set(image,(versions.get(image)||0)+1);const probe=probes.get(image);if(probe){probe.src='';probes.delete(image);}};
 async function pump(){
  if(running>=2||!jobs.length)return;
  const job=jobs.shift();running++;pump();
  let probe;
  try{
   if(!job.image.isConnected||versions.get(job.image)!==job.version)return;
   let loaded=false;
   for(let attempt=0;attempt<3&&!loaded;attempt++){
    if(versions.get(job.image)!==job.version)return;
    probe=new Image();probes.set(job.image,probe);probe.decoding='async';
    const request=attempt?job.src+(job.src.includes('?')?'&':'?')+'iris-retry='+attempt:job.src;
    let timer;
    try{
     await Promise.race([new Promise((resolve,reject)=>{
      probe.onload=()=>probe.naturalWidth?resolve():reject(new Error('empty image'));
      probe.onerror=()=>reject(new Error('image request failed'));probe.src=request;
     }),new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('image timeout')),12000);})]);
     // Safari can reject decode() even after a successful image load.
     try{await probe.decode();}catch{}
     loaded=probe.complete&&probe.naturalWidth>0;
    }catch{}finally{clearTimeout(timer);probe.onload=null;probe.onerror=null;}
   }
   if(!loaded)return;
   if(job.image.isConnected&&versions.get(job.image)===job.version){job.image.src=probe.src;job.done=true;}
  }catch{}finally{
   if(probe&&probes.get(job.image)===probe)probes.delete(job.image);
   job.resolve(!!job.done);running--;pump();
  }
 }
 const swap=(image,src)=>{
  cancel(image);
  if(image.getAttribute('src')===src&&image.complete&&image.naturalWidth)return Promise.resolve(true);
  const version=versions.get(image);
  return new Promise(resolve=>{jobs.push({image,src,version,resolve});pump();});
 };
 window.irisResolution={phone,get tier(){return tier;},source,swap,cancel,subscribe(callback){subscribers.add(callback);return()=>subscribers.delete(callback);}};
 const near=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  const state=images.get(target);if(!state)return;state.near=isIntersecting;
  if(isIntersecting&&target.getAttribute('src')!==source(state.base))swap(target,source(state.base));
 }),{rootMargin:'500px 0px'});
 function register(image){
  if(image.hasAttribute('data-resolution-managed')||image.hasAttribute('data-phone-src'))return;
  const given=image.dataset.resolutionBase||image.getAttribute('src');if(!given)return;
  const base=originals[key(given)]||given;
  if(!variants[key(base)]&&!image.dataset.resolutionBase)return;
  const previous=images.get(image);if(previous?.base===base)return;
  if(previous)cancel(image);
  images.set(image,{base,near:previous?.near||false});image.dataset.resolutionBase=base;
  if(phone)image.removeAttribute('srcset');
  if(!previous)image.addEventListener('error',()=>{
   const state=images.get(image);if(state)swap(image,source(state.base));
  });
  image.src=source(base);near.observe(image);
 }
 const scan=node=>{if(node.nodeType!==1)return;if(node.matches('img'))register(node);node.querySelectorAll('img').forEach(register);};
 new MutationObserver(records=>records.forEach(record=>{
  if(record.type==='attributes'){register(record.target);return;}
  record.addedNodes.forEach(scan);
  record.removedNodes.forEach(node=>{
   if(node.nodeType!==1)return;const removed=node.matches('img')?[node]:[...node.querySelectorAll('img')];
   removed.forEach(image=>{if(images.has(image)&&!image.isConnected){cancel(image);near.unobserve(image);images.delete(image);}});
  });
 })).observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['src','data-resolution-base']});
 const posters=new Map();
 const updatePosters=()=>document.querySelectorAll('video[poster]').forEach(video=>{
  const base=posters.get(video)||video.getAttribute('poster');posters.set(video,base);video.poster=source(base);
 });
 landscape.addEventListener('change',()=>{
  tier=landscape.matches?'landscape':'portrait';
  if(!phone)return;
  images.forEach((state,image)=>{if(state.near)swap(image,source(state.base));});
  subscribers.forEach(callback=>callback());updatePosters();
 });
 scan(document.documentElement);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updatePosters,{once:true});else updatePosters();
})();
