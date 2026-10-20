(()=>{
 const scriptUrl=document.currentScript.src;
 const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 async function waitForPageAssets(root=document){
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
 function makeLoader(){
  const existing=document.querySelector('.iris-page-loader');if(existing){window.irisLoadingSvg=existing.querySelector('svg')?.outerHTML;document.documentElement.classList.add('iris-loader-mounted');return existing;}
  const loader=document.createElement('div');loader.className='iris-page-loader';loader.setAttribute('role','status');loader.setAttribute('aria-label','正在加载作品');
  const backdrop=document.createElement('div');backdrop.className='iris-loader-backdrop';
  const mark=document.createElement('div');mark.className='iris-loading-mark';
  const logo=document.createElement('img');logo.className='iris-loading-logo';logo.src=new URL('assets/iris-loading-logo.svg?v=3',scriptUrl).href;logo.alt='IRIS';
  const still=document.createElement('img');still.className='iris-loading-still';still.src=new URL('assets/oct-nav-iris.webp',scriptUrl).href;still.alt='';
  mark.append(logo,still);loader.append(backdrop,mark);document.body.append(loader);document.documentElement.classList.add('iris-loader-mounted');return loader;
 }
 window.irisShowLoading=()=>{if(!document.querySelector('.iris-page-loader')){const loader=makeLoader();document.body.style.overflow='hidden';}};
 function setupBuffering(){
  const prepared=new WeakSet();
  function bind(){document.querySelectorAll('video').forEach(video=>{
   if(prepared.has(video))return;prepared.add(video);const parent=video.parentElement;let indicator=null,timer;
   const clear=()=>{clearTimeout(timer);indicator?.remove();indicator=null;};
   video.addEventListener('waiting',()=>{clear();timer=setTimeout(()=>{if(video.ended||video.paused||video.readyState>=3)return;indicator=document.createElement('span');indicator.className='iris-buffering';indicator.setAttribute('role','status');indicator.setAttribute('aria-label','视频缓冲中');parent.append(indicator);},250);});
   ['playing','canplay','error','ended','pause'].forEach(event=>video.addEventListener(event,clear));
  });}
  bind();new MutationObserver(records=>{if(records.some(record=>[...record.addedNodes].some(node=>node.nodeType===1&&(node.matches('video')||node.querySelector('video')))))bind();}).observe(document.body,{childList:true,subtree:true});
 }
 function start(){
  const root=document.documentElement;
  const fadeEntry=new URLSearchParams(location.search).get("iris-entry")==="fade";if(fadeEntry)root.classList.add("iris-fade-entry");
  if(new URLSearchParams(location.search).has('case-handoff')){
   root.classList.add('iris-case-handoff','iris-case-entry','iris-entry-ready','nav-arriving','nav-logo-ready','case-cover-ready');
   if(window.parent===window)root.classList.add('iris-handoff-active');
   setupBuffering();return;
  }
  const caseEntry=/\/(kfc|panerai|cluebie)(\.html)?\/?$/.test(location.pathname);
  const previousOverflow=document.body.style.overflow;
  const loaderStarted=performance.now();
  const loader=makeLoader();let completed=false;
  setupBuffering();
  if(caseEntry){root.classList.add('iris-case-entry');document.body.style.overflow='hidden';}
  const complete=()=>{if(completed)return;completed=true;root.classList.add('iris-entry-ready','nav-arriving','nav-logo-ready','case-cover-ready');document.body.style.overflow=previousOverflow;const nav=document.querySelector('.navigation .wordmark');if(nav)nav.style.visibility='';loader.remove();const intro=document.querySelector('.hero-video');if(intro){if(window.irisPlayHero)window.irisPlayHero();else{intro.muted=true;intro.playsInline=true;intro.play().catch(()=>{});}}};
  const shellParams=new URLSearchParams(location.search);
  if(window.parent!==window&&shellParams.get('iris-shell')==='1'){
   const parentOrigin=shellParams.get('iris-parent'),token=shellParams.get('iris-token');
   const nav=document.querySelector('.iris-nav-logo');
   if(nav&&!nav.querySelector('.iris-shell-nav-svg')){
    const holder=document.createElement('span');holder.innerHTML=window.irisLoadingSvg;
    const vector=holder.querySelector('svg');
    if(vector){nav.append(vector);vector.querySelectorAll('path').forEach(p=>p.style.animation='none');const ink=vector.getBBox();vector.setAttribute('viewBox',`${ink.x} ${ink.y} ${ink.width} ${ink.height}`);vector.setAttribute('preserveAspectRatio','xMidYMid meet');vector.classList.add('iris-shell-nav-svg');Object.assign(vector.style,{display:'block',width:'100%',height:'auto',aspectRatio:`${ink.width} / ${ink.height}`,overflow:'visible'});vector.removeAttribute('width');vector.removeAttribute('height');const image=nav.querySelector('img');if(image)image.style.display='none';}
   }
   document.documentElement.classList.add('iris-shell-nav-held');
   const send=(type,extra={})=>window.parent.postMessage({type,token,...extra},parentOrigin);
   const receive=event=>{
    if(event.source!==window.parent||event.origin!==parentOrigin||event.data?.token!==token)return;
    if(event.data.type==='iris-shell-activate'){complete();requestAnimationFrame(()=>requestAnimationFrame(()=>send('iris-shell-position',{logo:(document.querySelector('.iris-shell-nav-svg')||document.querySelector('.iris-nav-logo img'))?.getBoundingClientRect().toJSON()})));}
    if(event.data.type==='iris-shell-release'){document.documentElement.classList.remove('iris-shell-nav-held');requestAnimationFrame(()=>send('iris-shell-released'));}
   };
   addEventListener('message',receive);
   waitForPageAssets().then(()=>{ send('iris-shell-ready',{logo:(document.querySelector('.iris-shell-nav-svg')||document.querySelector('.iris-nav-logo img'))?.getBoundingClientRect().toJSON()});}).catch(()=>send('iris-shell-error'));
   return;
  }

  const logo=loader.querySelector('.iris-loading-logo');
  const fullHop=(async()=>{if(logo?.decode)await logo.decode().catch(()=>{});if(!reduced())await new Promise(resolve=>setTimeout(resolve,1200));})();
  Promise.all([waitForPageAssets(),fullHop]).then(async()=>{
   if(!caseEntry&&!reduced()){
    const remaining=1200-(performance.now()-loaderStarted);
    if(remaining>0)await new Promise(resolve=>setTimeout(resolve,remaining));
   }
   document.querySelectorAll('video[autoplay]:not(.hero-video)').forEach(video=>video.play().catch(()=>{}));
   if(fadeEntry&&!reduced()){
    root.classList.add('iris-entry-ready','nav-arriving','nav-logo-ready','case-cover-ready');
    await loader.animate([{opacity:1},{opacity:0}],{duration:420,easing:'ease',fill:'forwards'}).finished;
    complete();return;
   }
   if(!caseEntry&&!reduced()){
    const mark=loader.querySelector('.iris-loading-mark'),svg=loader.querySelector('svg'),nav=document.querySelector('.navigation .wordmark');
    if(!mark||!svg||!nav){complete();return;}
    svg.querySelectorAll('path').forEach(p=>p.style.animation='none');
    const ink=svg.getBBox();svg.setAttribute('viewBox',`${ink.x} ${ink.y} ${ink.width} ${ink.height}`);svg.setAttribute('preserveAspectRatio','xMidYMid meet');
    const resting=svg.cloneNode(true);resting.classList.add('iris-home-nav-svg');Object.assign(resting.style,{display:'block',width:'100%',height:'auto',aspectRatio:`${ink.width} / ${ink.height}`,overflow:'visible'});resting.removeAttribute('width');resting.removeAttribute('height');
    nav.replaceChildren(resting);nav.style.visibility='hidden';
    const target=resting.getBoundingClientRect(),height=150*ink.height/ink.width;
    Object.assign(mark.style,{position:'fixed',left:'0px',top:'0px',width:'150px',height:height+'px',transformOrigin:'0 0'});
    Object.assign(svg.style,{position:'absolute',inset:'0',width:'100%',height:'100%',overflow:'visible'});
    const wrap=svg.parentElement;if(wrap!==mark)Object.assign(wrap.style,{position:'absolute',inset:'0',width:'100%',height:'100%'});
    loader.querySelector('.iris-loading-still')?.remove();
    const centre=`translate(${innerWidth/2-75}px,${innerHeight/2-height/2}px) scale(1)`;
    const end=`translate(${target.left}px,${target.top}px) scale(${target.width/150})`;
    root.classList.add('nav-arriving','case-cover-ready');
    await Promise.all([mark.animate([{transform:centre},{transform:end}],{duration:850,easing:'cubic-bezier(.22,.7,.2,1)',fill:'forwards'}).finished,loader.querySelector('.iris-loader-backdrop').animate([{opacity:1},{opacity:0}],{delay:500,duration:350,fill:'forwards'}).finished]);
    nav.style.visibility='';complete();return;
   }
   if(!caseEntry||reduced()){complete();return;}
   const mark=loader.querySelector('.iris-loading-mark'),backdrop=loader.querySelector('.iris-loader-backdrop'),target=document.querySelector('.iris-nav-logo img');
   if(!mark||!target){complete();return;}
   const targetBox=target.getBoundingClientRect(),markBox=mark.getBoundingClientRect();
   const x=targetBox.left+targetBox.width/2-markBox.left-markBox.width/2;
   const y=targetBox.top+targetBox.height/2-markBox.top-markBox.height/2;
   root.classList.add('nav-arriving');loader.classList.add('loader-departing');
   const flight=mark.animate([{transform:'translate(0,0) scale(1)'},{transform:`translate(${x}px,${y}px) scale(${targetBox.width/markBox.width})`}],{duration:850,easing:'cubic-bezier(.22,.7,.2,1)',fill:'forwards'});
   setTimeout(()=>root.classList.add('case-cover-ready'),550);
   // Keep the travelling logo above the veil until its fade has actually finished.
   // Reveal the navigation logo and remove its exact-position stand-in in one paint.
   await flight.finished;
   await backdrop.animate([{opacity:1},{opacity:0}],{duration:350,easing:'ease',fill:'forwards'}).finished;
   if(!completed){completed=true;root.classList.add('iris-entry-ready','nav-logo-ready');document.body.style.overflow=previousOverflow;loader.remove();}
  }).catch(error=>{
   if(completed)return;
   if(error?.name==='AbortError'){complete();return;}
   const message=document.createElement('p');message.textContent='部分素材加载失败，请重试';
   const retry=document.createElement('button');retry.textContent='重新加载';retry.onclick=()=>location.reload();loader.append(message,retry);
  });
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
