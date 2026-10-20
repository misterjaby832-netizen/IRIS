export async function waitForPageAssets(root=document){
 const cover=root.querySelector('#frame-334-890, [data-node-id="477:106"], .kfc-cover, .hero');
 const critical=el=>!!el.closest('.iris-navigation, .navigation, .iris-page-loader, .kfc-entry-loader')||!!(cover&&cover.contains(el));
 const bounded=(task,ms=3500)=>Promise.race([Promise.resolve(task).catch(()=>{}),new Promise(resolve=>setTimeout(resolve,ms))]);
 const waitImage=img=>(async()=>{
  img.loading='eager';img.fetchPriority='high';img.decoding='async';
  if(!img.complete)await new Promise((resolve,reject)=>{img.addEventListener('load',resolve,{once:true});img.addEventListener('error',()=>reject(new Error('Image failed to load')),{once:true});});
  if(!img.naturalWidth)throw new Error('Image failed to load');
  if(img.decode)await img.decode();
 })();
 const tasks=[];
 root.querySelectorAll('img').forEach(img=>{
  if(critical(img)){if(img.getAttribute('src')||img.getAttribute('srcset'))tasks.push(waitImage(img));}
  else{img.loading='lazy';img.fetchPriority='low';img.decoding='async';}
 });
 const urls=new Set();
 if(cover) [cover,...cover.querySelectorAll('*')].forEach(el=>{
  const style=getComputedStyle(el);
  for(const value of [style.backgroundImage,style.maskImage,style.webkitMaskImage])
   for(const match of (value||'').matchAll(/url\(["']?([^"')]+)["']?\)/g))urls.add(match[1]);
 });
 urls.forEach(url=>{const img=new Image();img.src=url;tasks.push(waitImage(img));});
 root.querySelectorAll('video').forEach(video=>{
  if(!critical(video)){video.preload='none';return;}
  video.pause();video.preload='auto';
  if(video.readyState<2)tasks.push(bounded(new Promise(resolve=>{
   video.addEventListener('loadeddata',resolve,{once:true});video.addEventListener('error',resolve,{once:true});
  })));
 });
 tasks.push(bounded(document.fonts.ready,1500));
 await Promise.all(tasks);
}
