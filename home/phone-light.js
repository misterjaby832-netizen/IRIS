(()=>{
 if(!matchMedia('(max-width:767px)').matches)return;
 document.documentElement.classList.add('phone-light');
 const blank='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
 const start=()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
   target.src=isIntersecting?target.dataset.phoneSrc:blank;
  }),{rootMargin:'650px 0px'});
  document.querySelectorAll('img[data-phone-src]').forEach(img=>observer.observe(img));
  document.querySelectorAll('video').forEach(video=>{video.autoplay=false;video.removeAttribute('autoplay');video.preload='none';});
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
