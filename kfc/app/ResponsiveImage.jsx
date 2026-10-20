import {useEffect,useRef} from 'react';
const mobile=window.matchMedia('(max-width:767px)').matches;
const blank='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
let refinementQueue=Promise.resolve();
const nearby=mobile?new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
 target.dataset.phoneVisible=isIntersecting?'1':'0';
 if(!isIntersecting){target.src=blank;target.classList.remove('phone-image-ready');return;}
 const reveal=async()=>{
  if(!target.isConnected||target.dataset.phoneVisible!=='1')return;
  const src=target.dataset.phoneSrc;target.src=src;
  try{await target.decode();}catch{return;}
  if(target.isConnected&&target.dataset.phoneVisible==='1'&&target.getAttribute('src')===src)target.classList.add('phone-image-ready');
 };
 if(target.closest('.cal-detail'))refinementQueue=refinementQueue.then(reveal,reveal);
 else target.src=target.dataset.phoneSrc;
}),{rootMargin:'350px 0px'}):null;
export default function ResponsiveImage({src,loading,fetchPriority,...props}){
 const ref=useRef(null);
 const optimized=mobile&&typeof src==='string'&&/^\/kfc\/assets\/[^?]+\.(png|jpe?g|webp)$/i.test(src)
  ?src.replace('/assets/','/assets/mobile/').replace(/\.(png|jpe?g|webp)$/i,'.webp'):src;
 const critical=!mobile||fetchPriority==='high'||/nav-|kfc-cover|loading-logo/.test(src||'');
 useEffect(()=>{const image=ref.current;if(critical)return;nearby.observe(image);return()=>{image.dataset.phoneVisible='0';nearby.unobserve(image);};},[critical,optimized]);
 return <img {...props} ref={ref} src={critical?optimized:blank} data-phone-src={critical?undefined:optimized} loading={critical?(loading||'eager'):'eager'} fetchPriority={fetchPriority} decoding="async"/>;
}
