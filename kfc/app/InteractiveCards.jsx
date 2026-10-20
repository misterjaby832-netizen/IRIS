"use client";
import {useEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
const cards=[
 ['img685118','鸡块巨石阵',70,3159,-5],
 ['img685116','原味鸡陨石坑',405,3225,3],
 ['img685115','蛋挞火山',735,3145,-4],
 ['img685117','甜筒雪峰',1070,3205,4]
];
const src=name=>'/kfc/assets/oct-'+name+'.png';
export function Gallery({initial,onClose,items=cards,magnify=false}){
 const [index,setIndex]=useState(initial),dialog=useRef(null);
 const [lens,setLens]=useState(null);
 useEffect(()=>{const d=dialog.current,focused=document.activeElement,overflow=document.documentElement.style.overflow;d.showModal();document.documentElement.style.overflow='hidden';return()=>{d.close();document.documentElement.style.overflow=overflow;focused?.focus?.({preventScroll:true});};},[]);
 const step=direction=>{setLens(null);setIndex(i=>(i+direction+items.length)%items.length);};
 const move=e=>{if(!magnify||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();setLens({x:e.clientX-r.left,y:e.clientY-r.top,w:r.width,h:r.height});};
 return createPortal(<dialog ref={dialog} className="visual-gallery" aria-label="地理奇观图片预览" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===e.currentTarget)onClose();}} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}}}>
  <button className="gallery-close" aria-label="关闭图片预览" onClick={onClose} autoFocus>×</button>
  <button className="gallery-arrow previous" aria-label="上一张" onClick={()=>step(-1)}>←</button>
  <figure className="gallery-figure"><div className={'gallery-image-wrap'+(magnify?' magnifiable':'')} onPointerMove={move} onPointerLeave={()=>setLens(null)}><img key={index} src={src(items[index][0])} alt={items[index][1]}/>{magnify&&lens&&<div className="image-magnifier" aria-hidden="true" style={{left:lens.x,top:lens.y,backgroundImage:`url(${src(items[index][0])})`,backgroundSize:`${lens.w*2.5}px ${lens.h*2.5}px`,backgroundPosition:`${90-lens.x*2.5}px ${90-lens.y*2.5}px`}}/>}</div><figcaption aria-live="polite">{items[index][1]}<span>{index+1} / {items.length}</span></figcaption></figure>
  <button className="gallery-arrow next" aria-label="下一张" onClick={()=>step(1)}>→</button>
 </dialog>,document.body);
}
export default function InteractiveCards(){
 const [open,setOpen]=useState(null);
 return <div className="cal-cards" aria-label="地理奇观系列">{cards.map(([name,title,x,y,angle],i)=><button key={name} className="visual-card" aria-label={'放大查看：'+title} onClick={()=>setOpen(i)} style={{position:'absolute',left:x,top:y,width:301,height:400,'--card-rotation':angle+'deg'}}><img alt={title} src={src(name)}/></button>)}{open!==null&&<Gallery initial={open} onClose={()=>setOpen(null)}/>}</div>;
}
