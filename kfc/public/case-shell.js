(()=>{
 if(window.parent!==window||window.irisCaseShell)return;
 const config=window.irisCaseShellConfig;
 const allowed=new Set(config.origins);
 let current=null,busy=false,pending=null,veil=null;
 const clean=value=>{const u=new URL(value,location.href);if(!allowed.has(u.origin))throw new Error('Unknown case origin');['iris-entry','iris-transition','iris-shell','iris-parent','iris-token','case-view'].forEach(k=>u.searchParams.delete(k));return u;};

 const box=()=>(document.querySelector('.iris-shell-nav-svg')||document.querySelector('.iris-nav-logo img'))?.getBoundingClientRect().toJSON();
 const waitMessage=(type,frame,origin,token)=>new Promise((resolve,reject)=>{
  const timeout=setTimeout(()=>{removeEventListener('message',receive);reject(new Error('加载时间较长，请重试'));},45000);
  function receive(event){if(event.source!==frame.contentWindow||event.origin!==origin||event.data?.token!==token)return;if(event.data.type===type){clearTimeout(timeout);removeEventListener('message',receive);resolve(event.data);}else if(event.data.type==='iris-shell-error'){clearTimeout(timeout);removeEventListener('message',receive);reject(new Error('素材未能加载，请重试'));}}
  addEventListener('message',receive);
 });
 async function go(value,fromBox,restoring=false){
  if(busy)return;busy=true;
  let incoming=null,old=current;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  try{
 const nav=document.querySelector('.iris-nav-logo');
   if(nav&&!nav.querySelector('.iris-shell-nav-svg')){
    const holder=document.createElement('span');holder.innerHTML=window.irisLoadingSvg;
    const vector=holder.querySelector('svg');
    if(vector){nav.append(vector);vector.querySelectorAll('path').forEach(p=>p.style.animation='none');const ink=vector.getBBox();vector.setAttribute('viewBox',`${ink.x} ${ink.y} ${ink.width} ${ink.height}`);vector.setAttribute('preserveAspectRatio','xMidYMid meet');vector.classList.add('iris-shell-nav-svg');Object.assign(vector.style,{display:'block',width:'100%',height:'auto',aspectRatio:`${ink.width} / ${ink.height}`,overflow:'visible'});vector.removeAttribute('width');vector.removeAttribute('height');const image=nav.querySelector('img');if(image)image.style.display='none';}
   }
   
   const target=clean(value),token=crypto.randomUUID();
   incoming=document.createElement('iframe');incoming.className='iris-shell-view';incoming.title='案例：'+(target.pathname.includes('panerai')?'Panerai':target.pathname.includes('cluebie')?'Cluebie':'KFC');incoming.setAttribute('aria-hidden','true');incoming.inert=true;
   const loadURL=new URL(target);loadURL.searchParams.set('iris-shell','1');loadURL.searchParams.set('iris-parent',location.origin);loadURL.searchParams.set('iris-token',token);
   const ready=waitMessage('iris-shell-ready',incoming,target.origin,token);ready.catch(()=>{});
   incoming.src=loadURL.href;document.body.append(incoming);pending=incoming;
   veil=document.createElement('div');veil.className='case-next-loading iris-shell-veil';veil.setAttribute('role','status');veil.setAttribute('aria-label','正在加载作品');
   const backdrop=document.createElement('div');backdrop.className='case-next-loading-backdrop';
   const mark=document.createElement('div');mark.className='case-next-flight-mark';mark.innerHTML=window.irisLoadingSvg||config.svg||'';
   document.documentElement.style.setProperty('--iris-phase','0s');
   const svg=mark.querySelector('svg');
   const paths=svg?[...svg.querySelectorAll('path')]:[];
   paths.forEach(path=>{path.style.animation='none';});
   // Remove the loading asset's extra headroom from flight geometry.
   // overflow:visible still gives the letters room to hop above this ink box.

   veil.append(backdrop,mark);document.body.append(veil);
   if(svg){const ink=svg.getBBox();svg.setAttribute('viewBox',`${ink.x} ${ink.y} ${ink.width} ${ink.height}`);svg.setAttribute('preserveAspectRatio','xMidYMid meet');Object.assign(svg.style,{position:'absolute',left:'0',top:'0',width:'100%',height:'100%',minWidth:'0',minHeight:'0',overflow:'visible'});}
   const origin=(old?fromBox:box())||box(),cx=innerWidth/2,cy=innerHeight/2;
   const ink=svg.getBBox(),markHeight=150*ink.height/ink.width;
   Object.assign(mark.style,{left:'0px',top:'0px',width:'150px',height:markHeight+'px',transformOrigin:'0 0',filter:'drop-shadow(0 1px 4px #0009)'});
   const pose=rect=>({transform:`translate(${rect.left}px, ${rect.top}px) scale(${rect.width/150})`});
   const centre=pose({left:cx-75,top:cy-markHeight/2,width:150});
   const first=origin&&!restoring?pose(origin):centre;
   Object.assign(mark.style,first);
   const nativeLogo=document.querySelector('.iris-nav-logo');if(!old&&nativeLogo)nativeLogo.style.visibility='hidden';
   await Promise.all([backdrop.animate([{opacity:restoring?1:0},{opacity:1}],{duration:reduced||restoring?0:450,fill:'forwards'}).finished,mark.animate([first,centre],{duration:reduced||restoring?0:700,easing:'cubic-bezier(.22,.7,.2,1)',fill:'forwards'}).finished]);
   // A 1.2 s wave has a true resting boundary after its final letter lands.
   // Each letter keeps the same shared clock, including on slow loads.
   const waveDuration=1200;
   const ordered=paths.sort((a,b)=>a.getBBox().x-b.getBBox().x);
   const waves=reduced?[]:ordered.map((path,index)=>{
    const delay=index*140;
    return path.animate([
     {transform:'translateY(0px)',offset:0},
     {transform:'translateY(0px)',offset:delay/waveDuration},
     {transform:'translateY(-9px)',offset:(delay+324)/waveDuration,easing:'ease-in-out'},
     {transform:'translateY(0px)',offset:(delay+720)/waveDuration},
     {transform:'translateY(0px)',offset:1}
    ],{duration:waveDuration,iterations:reduced?1:Infinity,fill:'both',easing:'ease-in-out'});
   });
   const result=await ready;
   let completedWaves=0;
   if(!reduced&&waves.length){
    const elapsed=Number(waves[0].currentTime)||0;
    completedWaves=Math.max(1,Math.ceil(elapsed/waveDuration));
    waves.forEach(wave=>wave.effect.updateTiming({iterations:completedWaves}));
    await Promise.all(waves.map(wave=>wave.finished));
   }
   waves.forEach(wave=>wave.cancel());
   // Only the content below this persistent overlay is exchanged.
   incoming.classList.add('is-current');incoming.removeAttribute('aria-hidden');incoming.inert=false;
   document.body.classList.add('iris-shell-host');current=incoming;pending=null;
   document.querySelectorAll('body>main video').forEach(v=>v.pause());
   const positioned=waitMessage('iris-shell-position',incoming,target.origin,token);
   incoming.contentWindow.postMessage({type:'iris-shell-activate',token},target.origin);
   const measured=await positioned;
   const destination=measured.logo||result.logo||origin||{left:cx-43.5,top:35,width:87,height:39};
   await Promise.all([mark.animate([centre,pose(destination)],{duration:reduced?0:850,easing:'cubic-bezier(.22,.7,.2,1)',fill:'forwards'}).finished,backdrop.animate([{opacity:1},{opacity:0}],{delay:reduced?0:500,duration:reduced?0:350,fill:'forwards'}).finished]);
   const landed=mark.getBoundingClientRect();
   const inkRects=paths.map(path=>path.getBoundingClientRect());
   const inkLeft=Math.min(...inkRects.map(r=>r.left)),inkTop=Math.min(...inkRects.map(r=>r.top));
   const inkRight=Math.max(...inkRects.map(r=>r.right)),inkBottom=Math.max(...inkRects.map(r=>r.bottom));
   incoming.dataset.irisHandoff=JSON.stringify({waves:completedWaves,origin,destination,dx:landed.left-destination.left,dy:landed.top-destination.top,dw:landed.width-destination.width,dh:landed.height-destination.height,inkDx:inkLeft-destination.left,inkDy:inkTop-destination.top,inkDw:inkRight-inkLeft-destination.width,inkDh:inkBottom-inkTop-destination.height});
   const released=waitMessage('iris-shell-released',incoming,target.origin,token);
   incoming.contentWindow.postMessage({type:'iris-shell-release',token},target.origin);await released;
   veil.remove();veil=null;if(old)old.remove();
   const route=new URL(location.href);route.searchParams.delete('iris-entry');route.searchParams.delete('iris-transition');route.searchParams.set('case-view',target.href);
   if(restoring)history.replaceState({irisCase:target.href},'',route);else history.pushState({irisCase:target.href},'',route);
   document.title=incoming.title+' · IRIS';
  }catch(error){
   if(incoming&&incoming!==old)incoming.remove();current=old;pending=null;
   if(old){const previous=new URL(old.src);old.contentWindow.postMessage({type:'iris-shell-release',token:previous.searchParams.get('iris-token')},previous.origin);}
   if(!old){document.body.classList.remove('iris-shell-host');const logo=document.querySelector('.iris-nav-logo');if(logo)logo.style.visibility='';}
   if(veil){const message=document.createElement('div');message.className='iris-shell-error';message.textContent=error.message;const button=document.createElement('button');button.textContent='返回并重试';button.onclick=()=>{veil?.remove();veil=null;};message.append(button);veil.append(message);}
  }finally{busy=false;}
 }
 addEventListener('message',event=>{
  if(!current||event.source!==current.contentWindow||!allowed.has(event.origin))return;
  if(event.data?.type==='iris-shell-next')go(event.data.url,event.data.logo);
  if(event.data?.type==='iris-shell-exit'){try{location.assign(clean(event.data.url).href);}catch{}}
 });
 addEventListener('popstate',event=>{if(event.state?.irisCase)go(event.state.irisCase,null,true);else location.reload();});
 window.irisCaseShell={go};
 const restored=new URLSearchParams(location.search).get('case-view');if(restored)go(restored,null,true);
})();
