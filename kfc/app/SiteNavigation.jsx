"use client";
import {useRef,useState,useEffect} from 'react';
import './site-navigation.css';
const HOME='/';
export default function SiteNavigation(){
 const dialog=useRef(null),toggle=useRef(null),[open,setOpen]=useState(false);
 useEffect(()=>{if(!open)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous;};},[open]);
 const close=()=>{dialog.current.close();setOpen(false);toggle.current.focus({preventScroll:true});};
 return <><header className="iris-navigation"><button ref={toggle} className="iris-menu-toggle" aria-label="打开导航" aria-expanded={open} aria-controls="iris-menu" onClick={()=>{dialog.current.showModal();setOpen(true);}}><img src="/kfc/assets/oct-nav-menu.svg" width="18" height="18" alt=""/></button><a className="iris-nav-logo" href={HOME} aria-label="IRIS 返回首页"><img src="/kfc/assets/oct-nav-iris.png" alt="IRIS" width="87" height="39"/></a><a className="iris-contact" href={HOME+'#contact'}>Get in touch</a></header><dialog ref={dialog} id="iris-menu" className="iris-menu" onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===dialog.current&&e.clientX<dialog.current.getBoundingClientRect().left)close();}}><button className="iris-menu-close" aria-label="关闭导航" onClick={close}>×</button><p>IRIS / PORTFOLIO</p><nav aria-label="主导航">{[['Home',''],['Selected work','#work'],['About me','#about'],['Contact','#contact']].map(([label,hash],i)=><a key={label} href={HOME+hash}>{label}<span>0{i+1}</span></a>)}</nav><a className="iris-menu-email" href="mailto:1453994174@qq.com">1453994174@qq.com</a></dialog></>;
}
