"use client";
import {useLayoutEffect} from 'react';
export default function usePanelStack(host,paused){
 useLayoutEffect(()=>{
  const phone=window.irisResolution?.phone;
  const root=host.current,panels=[...root.querySelectorAll('.scroll-panel')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,lastTime=0;
  const offsets=panels.map(()=>0);
  const reset=()=>panels.forEach((p,i)=>{offsets[i]=0;p.style.transform='none';p.style.willChange='auto';});
  const draw=(time=0)=>{
   frame=0;if(reduced.matches||paused){reset();return;}
   const scale=root.clientWidth/1440,top=root.getBoundingClientRect().top,vh=window.innerHeight;
   const blend=1-Math.exp(-Math.min(40,time-lastTime||16)/90);lastTime=time;let settling=false;
   panels.forEach((panel,i)=>{
    const next=panels[i+1],boundary=next?top+Number(next.dataset.panelStart)*scale:Infinity;
    // Small speed difference only. No pinning, scaling, shading or new edges.
    const distance=Math.max(0,vh*.8-boundary);
    const target=Math.min(distance*.12,Math.min(phone?18:72,vh*.1))/scale;
    offsets[i]+=(target-offsets[i])*blend;
    if(Math.abs(target-offsets[i])>.05)settling=true;else offsets[i]=target;
    panel.style.transform=phone?`translateY(${offsets[i].toFixed(3)}px)`:`translate3d(0,${offsets[i].toFixed(3)}px,0)`;
    panel.style.willChange=boundary>-vh*.3&&boundary<vh?'transform':'auto';
   });
   if(settling)frame=requestAnimationFrame(draw);
  };
  const request=()=>{if(!frame)frame=requestAnimationFrame(draw);};
  const resize=new ResizeObserver(request);resize.observe(root);
  window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request);reduced.addEventListener('change',request);draw();
  return()=>{cancelAnimationFrame(frame);resize.disconnect();window.removeEventListener('scroll',request);window.removeEventListener('resize',request);reduced.removeEventListener('change',request);reset();};
 },[host,paused]);
}
