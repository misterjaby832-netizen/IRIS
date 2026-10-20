import ResponsiveImage from "./ResponsiveImage";
"use client";
import {useState} from 'react';

const foods=[
 ['nuggets',424.75,763.56,427.351,289.602,402.085,245.566,6.51,0,'imgSingle21DieCut'],
 ['pie',941,493.23,816.157,742.715,751.728,692.52,4.07,-1.42,'imgId03121DieCut'],
 ['tart',-169,615.1,562.837,581.254,434.753,389.378,35.56,3.07,'img11241DieCut'],
 ['wrap',-17.21,458.9,855.03,787.416,701.15,510.178,28.77,.65,'img21128Fn1DieCut'],
 ['burger',607.05,715.67,568.758,457.733,482.593,359.404,13.46,-2.6,'img1DieCut'],
 ['fries',771,561.9,741.443,777.352,560.477,592.744,24.39,1.46,'img2023111DieCut']
];
export default function AccountScene(){
 const [open,setOpen]=useState(null);
 return <section className="account-scene" aria-label="账号调性关键词" data-node-id="151:321">
  <svg width="0" height="0" aria-hidden="true"><defs><clipPath id="account-wave" clipPathUnits="objectBoundingBox"><path d="M1 0H0V.933628C0 .933628 .182478 .78509 .523358 .933628C.864236 1.08217 1 .934991 1 .934991V0Z"/></clipPath></defs></svg>
  <div className="account-clipped">
   <div className="account-stripes" aria-hidden="true"><i/><i/><i/></div>
   <div className="account-phone"><div className="account-phone-motion"><ResponsiveImage src="/kfc/assets/oct-img8.png" alt="肯德基小红书账号页面"/></div></div>
   {foods.map(([name,x,y,w,h,iw,ih,angle,skew,img])=><div key={name} className="account-food" data-food={name} style={{left:x,top:y,width:w,height:h}}><div className="account-food-rotation" style={{width:iw,height:ih,transform:`rotate(${angle}deg) skewX(${skew}deg)`}}><ResponsiveImage src={'/kfc/assets/oct-'+img+'.png'} alt=""/></div></div>)}
  </div>
  <h2 className="account-heading" data-node-id="8:8">账号调性关键词<br/><span>KEYWORDS</span></h2>
  {[
   ['idea','脑洞感',['超现实','反差感','万物皆可肯']],
   ['brand','品牌辨识度',['经典产品','红白符号','上校形象']],
   ['meme','梗文化',['疯狂星期四','V我50','评论区接梗']]
  ].map(([key,label,words])=><div key={key} className={'current-keyword '+key}>
   <button className="current-keyword-button" type="button" aria-expanded={open===key} aria-controls={'keyword-'+key} onClick={()=>setOpen(v=>v===key?null:key)}>#{label}</button>
   {open===key&&<div className="keyword-words" id={'keyword-'+key} role="status">{words.map((word,i)=><span key={word} style={{animationDelay:i*100+'ms'}}>{word}</span>)}</div>}
  </div>)}
  <span className="account-bottom-trigger" aria-hidden="true"/>
 </section>;
}
