import {useEffect,useRef,useSyncExternalStore} from 'react';
const resolution=window.irisResolution;
const mobile=resolution?.phone||window.matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches;
const subscribe=callback=>resolution?resolution.subscribe(callback):()=>{};
const snapshot=()=>resolution?.tier||'portrait';
export default function ResponsiveImage({src,loading,fetchPriority,...props}){
 useSyncExternalStore(subscribe,snapshot);
 const ref=useRef(null),optimized=mobile?(resolution?.source(src)||src):src;
 const initial=useRef(optimized).current;
 const critical=fetchPriority==='high'||/nav-|kfc-cover|loading-logo/.test(src||'');
 useEffect(()=>{
  const image=ref.current;
  const rect=image.getBoundingClientRect();
  if(mobile&&rect.bottom>-innerHeight&&rect.top<innerHeight*2&&image.getAttribute('src')!==optimized)resolution?.swap(image,optimized);
  return()=>resolution?.cancel(image);
 },[optimized]);
 return <img {...props} ref={ref} data-resolution-managed="" src={mobile?initial:optimized}
  onLoad={()=>ref.current?.classList.add('phone-image-ready')}
  onError={()=>{if(ref.current)resolution?.swap(ref.current,optimized);}}
  loading={critical?'eager':(loading||'lazy')} fetchPriority={fetchPriority} decoding="async"/>;
}
