import {useEffect,useRef,useSyncExternalStore} from 'react';
const resolution=window.irisResolution;
const mobile=resolution?.phone||window.matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches;
const blank='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
const subscribe=callback=>resolution?resolution.subscribe(callback):()=>{};
const snapshot=()=>resolution?.tier||'portrait';
let refinementQueue=Promise.resolve();
const nearby=mobile?new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
 target.dataset.phoneVisible=isIntersecting?'1':'0';
 if(!isIntersecting){resolution?.cancel(target);target.src=blank;target.classList.remove('phone-image-ready');return;}
 const reveal=async()=>{
  if(!target.isConnected||target.dataset.phoneVisible!=='1')return;
  const src=target.dataset.phoneSrc;
  let decoded=false;
  if(resolution)decoded=await resolution.swap(target,src);
  else{target.src=src;try{await target.decode();decoded=true;}catch{}}
  if(decoded&&target.isConnected&&target.dataset.phoneVisible==='1'&&target.getAttribute('src')===src)target.classList.add('phone-image-ready');
 };
 if(target.closest('.cal-detail'))refinementQueue=refinementQueue.then(reveal,reveal);
 else reveal();
}),{rootMargin:'350px 0px'}):null;
export default function ResponsiveImage({src,loading,fetchPriority,...props}){
 useSyncExternalStore(subscribe,snapshot);
 const ref=useRef(null);
 const optimized=mobile?(resolution?.source(src)||src):src;
 const initial=useRef(optimized).current;
 const critical=!mobile||fetchPriority==='high'||/nav-|kfc-cover|loading-logo/.test(src||'');
 useEffect(()=>{
  const image=ref.current;
  if(critical){if(mobile&&image.getAttribute('src')!==optimized)resolution?.swap(image,optimized);return;}
  nearby.observe(image);
  return()=>{image.dataset.phoneVisible='0';resolution?.cancel(image);nearby.unobserve(image);};
 },[critical,optimized]);
 return <img {...props} ref={ref} data-resolution-managed="" src={critical?(mobile?initial:optimized):blank} data-phone-src={critical?undefined:optimized} loading={critical?(loading||'eager'):'eager'} fetchPriority={fetchPriority} decoding="async"/>;
}
