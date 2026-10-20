import ResponsiveImage from "./ResponsiveImage";
"use client";
import {loadingLogoSvg} from './loading-logo';
import {waitForPageAssets} from './page-readiness';
import {useEffect,useLayoutEffect,useRef,useState} from 'react';
import CurrentDesign from './CalibratedDesign';
import {Button} from '@/components/ui/button';
import './experience.css';
import usePanelStack from './usePanelStack';
import SiteNavigation from './SiteNavigation';

const WIDTH=1440,HEIGHT=12678;
const phoneLight=window.irisResolution?.phone||matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches;
const asset=name=>'/kfc/assets/oct-'+name+'.png';
const columns=[['img4001318','img4001317','img4001321','img4001328','img685116'],['img4001322','img4001319','img4001329','img4001320','img685115'],['imgRectangle1','img4001323','imgRectangle2','img4001332','img685118'],['img4001324','img4001325','img4001331','img4001330','img685117'],['img4001326','img4001327','img4001333','img4001334','img685119']];
export function Feed(){return <section className="current-feed" aria-label="KFC社媒创意视觉信息流">{columns.map((items,i)=><div className="current-feed-column" key={i} style={{'--offset':[68.5,30.5,89.5,30.5,68.5][i]+'px','--loop':items.length*381+'px','--duration':[58,69,63,72,61][i]+'s'}}><div className="current-feed-track">{(phoneLight?[0,1]:[0,1,2]).map(copy=><div className="current-feed-set" key={copy} aria-hidden={copy?true:undefined}>{items.map((name,j)=><ResponsiveImage key={name} src={asset(name)} alt={copy?'':'KFC 创意视觉 '+(i+1)+'-'+(j+1)} width="274" height="366" decoding="async"/>)}</div>)}</div></div>)}</section>}
export function Glass(){return <div className="current-glass-field" aria-hidden="true"><div className="current-blob primary"/><div className="current-blob secondary"/></div>}
export function Keywords(){const [open,setOpen]=useState(false);return <><div className="current-keyword idea"><button className="current-keyword-button" type="button">#脑洞感</button></div><div className="current-keyword brand"><button className="current-keyword-button" type="button">#品牌辨识度</button></div><div className="current-keyword meme"><button className="current-keyword-button" aria-expanded={open} aria-controls="meme-message" onClick={()=>setOpen(v=>!v)} type="button">#梗文化</button>{open&&<span className="current-meme" id="meme-message" role="status">疯四。</span>}</div></>}

export default function Experience(){
 useEffect(()=>{const script=document.createElement('script');script.src='/kfc/case-footer.js?v=19';document.body.append(script);return()=>{script.remove();document.querySelector('.case-next-footer')?.remove();};},[]);
 const host=useRef(null),loader=useRef(null),running=useRef([]),[scale,setScale]=useState(1),[paused,setPaused]=useState(false),[coverReady,setCoverReady]=useState(false),[loadError,setLoadError]=useState(false);
 usePanelStack(host,paused);
 useEffect(()=>{
  const root=host.current;
  window.irisLoadingSvg=loadingLogoSvg;
  const fadeEntry=new URLSearchParams(location.search).get("iris-entry")==="fade";if(fadeEntry)document.documentElement.classList.add("iris-fade-entry");
  let active=true;const timers=[],animations=[];
  const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
  const later=(fn,delay)=>timers.push(setTimeout(()=>{if(active)fn();},delay));
  const finish=()=>{root.classList.add('case-cover-ready','nav-arriving','nav-logo-ready');setCoverReady(true);document.body.style.overflow=previousOverflow;};
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
    if(event.data.type==='iris-shell-activate'){finish();requestAnimationFrame(()=>requestAnimationFrame(()=>send('iris-shell-position',{logo:(document.querySelector('.iris-shell-nav-svg')||document.querySelector('.iris-nav-logo img'))?.getBoundingClientRect().toJSON()})));}
    if(event.data.type==='iris-shell-release'){document.documentElement.classList.remove('iris-shell-nav-held');requestAnimationFrame(()=>send('iris-shell-released'));}
   };
   addEventListener('message',receive);
   waitForPageAssets(document).then(()=>{if(!active)return; send('iris-shell-ready',{logo:(document.querySelector('.iris-shell-nav-svg')||document.querySelector('.iris-nav-logo img'))?.getBoundingClientRect().toJSON()});}).catch(()=>send('iris-shell-error'));
   return()=>{active=false;removeEventListener('message',receive);document.body.style.overflow=previousOverflow;};
  }

  if(new URLSearchParams(location.search).has('case-handoff')){document.documentElement.classList.add('iris-case-handoff');if(window.parent===window)document.documentElement.classList.add('iris-handoff-active');finish();return;}
  const fullHop=(async()=>{const logo=loader.current?.querySelector('.iris-loading-logo');if(logo?.decode)await logo.decode().catch(()=>{});if(!matchMedia('(prefers-reduced-motion: reduce)').matches)await new Promise(resolve=>setTimeout(resolve,1200));})();
  Promise.all([waitForPageAssets(document),fullHop]).then(()=>{
   if(!active)return;
   if(matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return;}
   if(fadeEntry){
    root.classList.add('case-cover-ready','nav-arriving','nav-logo-ready');
    const fade=loader.current.animate([{opacity:1},{opacity:0}],{duration:420,easing:'ease',fill:'forwards'});animations.push(fade);
    fade.finished.then(()=>{if(active)finish();}).catch(()=>{});return;
   }
   const layer=loader.current,mark=layer.querySelector('.iris-loading-mark');
   const target=document.querySelector('.iris-nav-logo img').getBoundingClientRect();
   const origin=mark.getBoundingClientRect();
   const x=target.left+target.width/2-origin.left-origin.width/2;
   const y=target.top+target.height/2-origin.top-origin.height/2;
   root.classList.add('nav-arriving');layer.classList.add('loader-departing');
   const flight=mark.animate([{transform:'translate(0,0) scale(1)'},{transform:`translate(${x}px,${y}px) scale(${target.width/origin.width})`}],{duration:850,easing:'cubic-bezier(.22,.7,.2,1)',fill:'forwards'});
   animations.push(flight);
   later(()=>root.classList.add('case-cover-ready'),550);
   // The travelling logo stays above the backdrop for the entire handoff.
   flight.finished.then(()=>{
    if(!active)return;
    const fade=layer.querySelector('.kfc-loader-backdrop').animate([{opacity:1},{opacity:0}],{duration:350,easing:'ease',fill:'forwards'});
    animations.push(fade);
    return fade.finished.then(()=>{if(active)finish();});
   }).catch(()=>{});
  }).catch(()=>{if(active)setLoadError(true);});
  return()=>{active=false;timers.forEach(clearTimeout);animations.forEach(a=>a.cancel());document.body.style.overflow=previousOverflow;root.classList.remove('case-cover-ready','nav-arriving','nav-logo-ready');};
 },[]);
 // 红色精修卡片按滚动速度轻微滞后，停下后自然回到设计稿位置。
 useEffect(()=>{
  const root=host.current,cards=[...root.querySelectorAll('.cal-detail')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,lastY=window.scrollY,lastTime=0;
  const offsets=cards.map(()=>0);
  const reset=()=>{offsets.fill(0);cards.forEach(card=>card.style.transform='none');};
  const draw=(time)=>{
   frame=0;const decay=Math.exp(-Math.min(40,time-lastTime||16)/180);lastTime=time;
   let moving=false;
   cards.forEach((card,i)=>{offsets[i]*=decay;if(Math.abs(offsets[i])<.08)offsets[i]=0;else moving=true;card.style.transform=phoneLight?(offsets[i]?`translateY(${offsets[i]}px)`:'none'):`translate3d(0,${offsets[i]}px,0)`;});
   if(moving)frame=requestAnimationFrame(draw);
  };
  const scroll=()=>{
   const delta=window.scrollY-lastY;lastY=window.scrollY;
   if(paused||reduced.matches){reset();return;}
   const scale=root.clientWidth/WIDTH;
   cards.forEach((card,i)=>{const rect=card.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight)offsets[i]=Math.max(-64,Math.min(64,offsets[i]+delta*.38/scale));});
   if(!frame)frame=requestAnimationFrame(draw);
  };
  window.addEventListener('scroll',scroll,{passive:true});reduced.addEventListener('change',reset);
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);reduced.removeEventListener('change',reset);reset();};
 },[paused]);
 useLayoutEffect(()=>{const el=host.current;const resize=()=>setScale(el.clientWidth/WIDTH);resize();const observer=new ResizeObserver(resize);observer.observe(el);return()=>observer.disconnect();},[]);
 useEffect(()=>{running.current.forEach(a=>paused?a.pause():a.play());},[paused]);
 useEffect(()=>{const root=host.current,feed=root.querySelector('.current-feed');const observer=new IntersectionObserver(entries=>{root.classList.toggle('feed-active',entries.some(e=>e.isIntersecting));},{threshold:0});if(feed)observer.observe(feed);return()=>observer.disconnect();},[]);
 useEffect(()=>{
  const root=host.current;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let stopped=false,played=false;
  const stickers=[...root.querySelectorAll('.account-food')];
  const phone=root.querySelector('.account-phone-motion');
  const finish=()=>{root.classList.add('account-done');stickers.forEach(e=>e.style.opacity='1');if(phone){phone.style.opacity='1';phone.style.transform='none';}};
  if(reduced.matches){finish();return;}
  stickers.forEach(e=>e.style.opacity='0');if(phone){phone.style.opacity='0';phone.style.transform='translateY(850px)';}
  const play=async()=>{
   if(played||stopped)return;played=true;
   await Promise.all(stickers.map(el=>el.querySelector('img')?.decode().catch(()=>{})));
   if(stopped)return;
   const s=root.clientWidth/WIDTH;
   running.current=stickers.map((el,i)=>{
    const bounds=el.getBoundingClientRect();const distance=-Math.max(1100,(bounds.bottom+80)/s);
    const a=el.animate([{transform:'translate3d(0,'+distance+'px,0)',opacity:0,offset:0},{transform:'translate3d(0,'+(distance*.88)+'px,0)',opacity:1,offset:.18},{transform:'translate3d(0,0,0)',opacity:1,offset:.9},{transform:'translate3d(0,-4px,0)',opacity:1,offset:.96},{transform:'translate3d(0,0,0)',opacity:1}],{duration:1350,delay:i*50,easing:'cubic-bezier(.3,.05,.25,1)',fill:'forwards'});
    if(root.classList.contains('motion-paused'))a.pause();return a;
   });
   await Promise.all(running.current.map(a=>a.finished.catch(()=>{})));if(stopped)return;
   stickers.forEach(el=>{el.style.opacity='1';el.style.transform='none';});running.current.forEach(a=>a.cancel());
   if(phone){await phone.querySelector('img')?.decode().catch(()=>{});if(stopped)return;const a=phone.animate([{transform:'translate3d(0,850px,0)',opacity:0},{transform:'translate3d(0,660px,0)',opacity:1,offset:.18},{transform:'translate3d(0,0,0)',opacity:1}],{duration:850,easing:'cubic-bezier(.22,.65,.25,1)',fill:'forwards'});running.current=[a];if(root.classList.contains('motion-paused'))a.pause();await a.finished.catch(()=>{});}
   if(!stopped)finish();
  };
  const trigger=root.querySelector('.account-bottom-trigger');const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){play();observer.disconnect();}},{threshold:0,rootMargin:'0px 0px 8% 0px'});if(trigger)observer.observe(trigger);
  return()=>{stopped=true;observer.disconnect();running.current.forEach(a=>a.cancel());};
 },[]);
 useEffect(()=>{
  const root=host.current,group=root.querySelector('[data-node-id="837:11"]');if(!group)return;
  const bubbles=[...group.children].sort((a,b)=>a.offsetTop-b.offsetTop);
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  bubbles.forEach((el,i)=>{const opacity=getComputedStyle(el).opacity;el.classList.add('message-bubble');el.style.setProperty('--bubble-delay',i*150+'ms');el.style.setProperty('--bubble-opacity',opacity);});
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){group.classList.add('messages-visible');observer.disconnect();}},{threshold:.18});observer.observe(group);
  return()=>{observer.disconnect();group.classList.remove('messages-visible');bubbles.forEach(el=>el.classList.remove('message-bubble'));};
 },[]);
 return <><SiteNavigation/>{!coverReady&&<div ref={loader} className="kfc-entry-loader" role="status" aria-label="正在加载作品"><div className="kfc-loader-backdrop"/><div className="iris-loading-mark"><div className="iris-loading-logo" dangerouslySetInnerHTML={{__html:loadingLogoSvg}}/><ResponsiveImage className="iris-loading-still" src="/kfc/assets/oct-nav-iris.png" alt=""/></div>{loadError&&<div className="iris-load-error"><p>部分素材加载失败，请重试</p><button onClick={()=>location.reload()}>重新加载</button></div>}</div>}<main ref={host} className={'portfolio current-portfolio '+(paused?'motion-paused':'')}><h1 className="sr-only">KFC · 社交媒体 AIGC 视觉创作</h1><div className="current-shell" style={{height:HEIGHT*scale}}><div className="current-artboard" style={{transform:'scale('+scale+')'}}><CurrentDesign/></div></div>{!phoneLight&&<Button variant="ghost" className="motion-toggle" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'播放动效':'暂停动效'}</Button>}<span className="build-label">KFC / 导航10</span></main></>;
}
