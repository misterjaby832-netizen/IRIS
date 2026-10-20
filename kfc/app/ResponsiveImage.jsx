import {useEffect,useRef} from 'react';
const mobile=window.matchMedia('(max-width:767px)').matches;
const blank='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
const nearby=mobile?new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
 target.src=isIntersecting?target.dataset.phoneSrc:blank;
}),{rootMargin:'650px 0px'}):null;
export default function ResponsiveImage({src,loading,fetchPriority,...props}){
 const ref=useRef(null);
 const optimized=mobile&&typeof src==='string'&&/^\/kfc\/assets\/[^?]+\.(png|jpe?g|webp)$/i.test(src)
  ?src.replace('/assets/','/assets/mobile/').replace(/\.(png|jpe?g|webp)$/i,'.webp'):src;
 const critical=!mobile||fetchPriority==='high'||/nav-|kfc-cover|loading-logo/.test(src||'');
 useEffect(()=>{const image=ref.current;if(critical)return;nearby.observe(image);return()=>nearby.unobserve(image);},[critical,optimized]);
 return <img {...props} ref={ref} src={critical?optimized:blank} data-phone-src={critical?undefined:optimized} loading={critical?(loading||'eager'):'eager'} fetchPriority={fetchPriority} decoding="async"/>;
}
