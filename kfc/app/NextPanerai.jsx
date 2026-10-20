"use client";
import {useEffect,useRef,useState} from 'react';
import './next-panerai.css';

export default function NextPanerai({paused}) {
 const section=useRef(null);
 const [href,setHref]=useState('https://iris-visual-portfolio.bowrainking.chatgpt.site/panerai.html');
 useEffect(()=>{
  if(['localhost','127.0.0.1'].includes(location.hostname)) setHref('http://127.0.0.1:8765/panerai.html');
 },[]);
 useEffect(()=>{
  const el=section.current, reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0;
  // 【可改·动效】向下滚动时封面逐步露出，位移量为视口高度的 18%。
  const draw=()=>{
   frame=0;
   const rect=el.getBoundingClientRect();
   const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/innerHeight));
   el.style.setProperty('--cover-shift',reduced.matches||paused?'0px':`${(1-progress)*innerHeight*.18}px`);
  };
  const request=()=>{if(!frame)frame=requestAnimationFrame(draw);};
  addEventListener('scroll',request,{passive:true});addEventListener('resize',request);reduced.addEventListener('change',request);draw();
  return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',request);removeEventListener('resize',request);reduced.removeEventListener('change',request);};
 },[paused]);
 return <section ref={section} id="next-case" className="next-panerai" aria-label="下一个项目：PANERAI">
  <a className="next-panerai-cover" href={href} aria-label="进入 PANERAI 沛纳海案例">
   <div className="next-panerai-sand"/>
   <img className="next-panerai-logo" src="/kfc/assets/panerai-cover-img011Vectorized.svg" alt="PANERAI"/>
   <div className="next-panerai-glass"/>
   <span className="next-panerai-number">02</span>
   <span className="next-panerai-selected">SELECTED</span>
   <span className="next-panerai-category">INFOGRAPHIC DESIGN</span>
   <div className="next-panerai-meta"><p>项目类型　长图文设计</p><p>品牌　　　PANERAI</p><p>职责　　　执行</p></div>
  </a>
 </section>;
}
