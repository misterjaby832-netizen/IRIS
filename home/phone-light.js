(()=>{
 if(!(window.irisResolution?.phone||matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches))return;
 document.documentElement.classList.add('phone-light');
 const blank='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
 const start=()=>{
  const resolution=window.irisResolution,managed=[...document.querySelectorAll('img[data-phone-src]')];
  managed.forEach(image=>{
   image.loading='lazy';image.decoding='async';
   image.src=resolution?.source(image.dataset.resolutionBase||image.dataset.phoneSrc)||image.dataset.phoneSrc;
   image.addEventListener('error',()=>resolution?.swap(image,resolution.source(image.dataset.resolutionBase||image.dataset.phoneSrc)));
  });
  resolution?.subscribe(()=>managed.forEach(image=>{
   const rect=image.getBoundingClientRect();
   if(rect.bottom>-innerHeight&&rect.top<innerHeight*2)resolution.swap(image,resolution.source(image.dataset.resolutionBase||image.dataset.phoneSrc));
  }));
  const videos=[...document.querySelectorAll('video')],visible=new WeakSet();
  const ready=()=>document.documentElement.classList.contains('iris-entry-ready');
  const play=video=>{
   if(!visible.has(video)||!ready()||document.hidden)return;
   const result=video.play();
   result?.catch(()=>{if(visible.has(video))video.dataset.autoplayBlocked='true';});
  };
  const videoObserver=new IntersectionObserver(entries=>entries.forEach(({target:video,intersectionRatio})=>{
   const inView=intersectionRatio>=.55;
   if(inView){
    if(!visible.has(video)){visible.add(video);video.muted=true;play(video);}
   }else{visible.delete(video);video.pause();video.muted=true;}
  }),{threshold:[0,.55]});
  videos.forEach(video=>{
   video.autoplay=false;video.removeAttribute('autoplay');video.preload='none';
   video.muted=true;video.defaultMuted=true;video.playsInline=true;
   video.addEventListener('playing',()=>{delete video.dataset.autoplayBlocked;});
   videoObserver.observe(video);
   // Keep the existing controls: Cluebie has sound/fullscreen buttons;
   // Panerai is a silent showcase clip and uses native playback controls.
   if(!video.closest('.cluebie-player'))video.controls=true;
  });
  let entryReady=ready();
  new MutationObserver(()=>{const next=ready();if(next&&!entryReady)videos.forEach(play);entryReady=next;}).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  document.addEventListener('visibilitychange',()=>videos.forEach(video=>{if(document.hidden){video.pause();video.muted=true;}else play(video);}));
  addEventListener('pagehide',()=>videos.forEach(video=>{video.pause();video.muted=true;}));
  addEventListener('pageshow',()=>videos.forEach(play));
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
