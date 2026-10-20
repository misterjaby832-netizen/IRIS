"use client";
import {useEffect,useState} from 'react';
import {createPortal} from 'react-dom';
import {Gallery} from './InteractiveCards';
const options=[['img01','OP01 · 蛋挞梯田','29:167'],['img02','OP02 · 蛋挞火山','29:178'],['img03','OP03 · 原味鸡陨石坑','29:189'],['img04','OP04 · 甜筒雪峰','29:200']];
export default function ScreeningGallery(){
 const [targets,setTargets]=useState([]),[open,setOpen]=useState(null);
 useEffect(()=>{const nodes=options.map(([, ,id])=>document.querySelector(`[data-node-id="${id}"]`));nodes.forEach(n=>n?.classList.add('screening-image'));setTargets(nodes);return()=>nodes.forEach(n=>n?.classList.remove('screening-image'));},[]);
 return <>{targets.map((node,i)=>node&&createPortal(<button type="button" className="screening-image-trigger" aria-label={'放大查看：'+options[i][1]} onClick={()=>setOpen(i)}/>,node,options[i][0]))}{open!==null&&<Gallery items={options} initial={open} magnify onClose={()=>setOpen(null)}/>}</>;
}
