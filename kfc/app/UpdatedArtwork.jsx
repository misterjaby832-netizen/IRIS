"use client";
import {useEffect,useLayoutEffect,useRef,useState} from "react";
import {Button} from "@/components/ui/button";
const imgRectangle="/kfc/assets/v2-imgRectangle.png";
const img2="/kfc/assets/v2-img2.png";
const imgSlide431="/kfc/assets/v2-imgSlide431.png";
const img7="/kfc/assets/v2-img7.png";
const imgSingle21DieCut="/kfc/assets/v2-imgSingle21DieCut.png";
const imgId03121DieCut="/kfc/assets/v2-imgId03121DieCut.png";
const img11241DieCut="/kfc/assets/v2-img11241DieCut.png";
const img21128Fn1DieCut="/kfc/assets/v2-img21128Fn1DieCut.png";
const img1DieCut="/kfc/assets/v2-img1DieCut.png";
const img2023111DieCut="/kfc/assets/v2-img2023111DieCut.png";
const imgFrame="/kfc/assets/v2-imgFrame.png";
const imgFrame1="/kfc/assets/v2-imgFrame1.png";
const imgFrame2="/kfc/assets/v2-imgFrame2.png";
const imgFrame3="/kfc/assets/v2-imgFrame3.png";
const imgFrame4="/kfc/assets/v2-imgFrame4.png";
const imgFrame5="/kfc/assets/v2-imgFrame5.png";
const imgFrame6="/kfc/assets/v2-imgFrame6.png";
const imgFrame7="/kfc/assets/v2-imgFrame7.png";
const img="/kfc/assets/v2-img.svg";
const imgVector18="/kfc/assets/v2-imgVector18.svg";
const imgRectangle13="/kfc/assets/v2-imgRectangle13.svg";
const img8="/kfc/assets/v2-img8.svg";
const img9="/kfc/assets/v2-img9.svg";
const imgGlass="/kfc/assets/v2-imgGlass.svg";
const imgVector19="/kfc/assets/v2-imgVector19.svg";
const imgGroup2="/kfc/assets/v2-imgGroup2.svg";
const imgGlass1="/kfc/assets/v2-imgGlass1.svg";
const img10="/kfc/assets/v2-img10.svg";
const shapeGreen="/kfc/assets/shapeGreen.svg";
const shapeRed="/kfc/assets/shapeRed.svg";
const shapeBlue="/kfc/assets/shapeBlue.svg";
const WIDTH=1440, PAGE_HEIGHT=3299;
function Artwork({paused}){return <div className="artwork relative size-full"><div className="absolute contents inset-[0_0_91.28%_0]" data-node-id="29:67" data-name="CASE01">
        <div className="absolute contents inset-[0_0_91.28%_0]" data-node-id="29:3" data-name="case01">
          <div className="absolute inset-[0_0_91.28%_0]" data-node-id="64:21" data-name="背景">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={img9} />
          </div>
          <div className="glass-wave glass-blob-field" data-node-id="29:4" aria-hidden="true"><img className="glass-blob blob-primary" src={imgGlass} alt=""/><img className="glass-blob blob-secondary" src={imgGlass} alt=""/></div>
          <div className="absolute inset-[0_40.69%_91.28%_0] overflow-clip" data-node-id="29:5" data-name="地面">
            <div className="absolute blur-[5.6px] inset-[-0.45%_-1.05%_0_-9.13%]" data-node-id="29:6" data-name="Rectangle">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-sans font-black inset-[48.53%_47.66%_47.18%_31.15%] leading-[normal] not-italic text-[23px] text-white" data-node-id="29:50">
              SELECTED
            </p>
            <div className="absolute flex inset-[33.07%_28.26%_63.77%_68.74%] items-center justify-center" data-node-id="29:44" style={{ containerType: "size" }}>
              <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                <div className="relative size-full" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector19} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0)] blur-[4.95px] h-[436px] left-[379px] overflow-clip top-[446px] w-[475px]" data-node-id="42:54" data-name="KFC">
            <div className="absolute inset-[4.82%_-27.17%_4.53%_2.11%]" data-node-id="42:62">
              <div className="absolute inset-[-5.54%_-3.69%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="absolute inset-[0_0_91.28%_59.31%]" data-node-id="29:68" data-name="glass">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGlass1} />
          </div>
          <FloatingShapes paused={paused}/>
          <div className="[word-break:break-word] absolute contents inset-[3.53%_68.61%_94.8%_4.51%] leading-[normal] text-white" data-node-id="42:60" data-name="01">
            <p className="absolute font-mono font-bold inset-[3.53%_83.75%_94.8%_4.51%] text-[140px]" data-node-id="29:49">
              01
            </p>
            <p className="absolute font-sans font-normal inset-[4.6%_68.61%_95.24%_18.4%] not-italic text-[14px] whitespace-pre-wrap" data-node-id="29:51">{`AIGC Visual / Social Media  `}</p>
          </div>
          <div className="[word-break:break-word] absolute contents inset-[1.36%_11.6%_93.66%_69.93%] not-italic text-white" data-node-id="64:20" data-name="字">
            <div className="absolute font-kfc font-black inset-[2.76%_18.96%_96.66%_77.43%] leading-[0] text-[23px] whitespace-pre-wrap" data-node-id="29:57">
              <p className="leading-[normal] mb-0">{`项 目                                                               `}</p>
              <p className="leading-[normal]">类 型</p>
            </div>
            <p className="absolute font-kfc inset-[3.55%_17.08%_96.17%_75.49%] leading-[normal] text-[23px] tracking-[5.29px]" data-node-id="29:58">
              运营设计
            </p>
            <p className="absolute font-kfc font-black inset-[4.33%_19.17%_95.37%_77.5%] leading-[normal] text-[24px]" data-node-id="29:59">
              品牌
            </p>
            <p className="absolute font-kfc inset-[4.82%_19.38%_94.89%_77.78%] leading-[normal] text-[23px]" data-node-id="29:60">
              KFC
            </p>
            <p className="absolute font-kfc font-black inset-[5.61%_19.24%_94.1%_77.57%] leading-[normal] text-[23px]" data-node-id="29:61">
              职责
            </p>
            <p className="absolute font-kfc inset-[6.06%_16.81%_93.66%_75.28%] leading-[normal] text-[23px]" data-node-id="29:62">
              创意｜执行
            </p>
            <p className="absolute font-sans font-normal inset-[1.36%_11.6%_98.52%_69.93%] leading-[normal] text-[14px]" data-node-id="29:66">
              AIGC EXPLORATION + HUMAN CRAFT
            </p>
          </div>
        </div>
      </div><div className="absolute contents left-[-4px] top-[882px]" data-node-id="400:1311" data-name="项目背景">
        <div className="-translate-x-1/2 absolute h-[1517px] left-1/2 top-[882px] w-[1440px]" data-node-id="400:1312" data-name="整个底">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img8} />
        </div>
        <SocialFeed paused={paused}/>
        <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[84.55%] contents left-[calc(50%-1px)] not-italic text-white top-[10.05%]" data-node-id="402:1342">
          <div className="absolute bottom-[87.98%] font-kfc leading-[0] left-[calc(50%-221px)] text-[18px] text-justify top-[10.05%] w-[816px] whitespace-pre-wrap" data-node-id="400:1328">
            <p className="mb-0">
              <span className="leading-[normal]">社交媒体逐渐成为年轻消费者接触品牌、分享体验与参与话题的重要场景，传统以产品展示为核心的内容形式，已难以持续吸引用户的注意。</span>
              <span className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic">KFC</span>
              <span className="leading-[normal]">需要在保持品牌识别度的同时，以更具想象力和社交传播力的视觉语言，与年轻群体建立新的沟通方式。本项目以</span>
              <span className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic">KFC</span>
              <span className="leading-[normal]">小红书官方账号为主要传播场景，围绕</span>
              <span className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic">KFC</span>
              <span className="leading-[normal]">的经典产品与品牌内容展开</span>
              <span className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic">AIGC</span>
              <span className="leading-[normal]">视觉探索。</span>
            </p>
            <p className="leading-[normal] mb-0">​</p>
            <p>
              <span className="leading-[normal]">项目尝试把</span>
              <span className="[word-break:break-word] font-kfc font-black leading-[normal] not-italic">AI</span>
              <span className="leading-[normal]">生成技术融入社交媒体内容生产流程，在提升视觉创意效率的同时，建立一套年轻、鲜明且具有延展性的品牌表达方式，使每一张画面既能独立形成传播记忆点，也能共同构成统一而丰富的内容视觉体系。</span>
            </p>
          </div>
          <div className="absolute bottom-[84.55%] font-sans font-extralight leading-[0] left-[calc(50%-221px)] text-[18px] text-justify top-[12.85%] w-[816px] whitespace-pre-wrap" data-node-id="400:1329">
            <p className="leading-[normal] mb-0">Social media has become an important space for young consumers to discover brands, share experiences, and join conversations. Traditional content centered on product displays can no longer hold their attention for long. KFC needs a more imaginative, shareable visual language that connects with younger audiences while preserving its recognizable brand identity. This project explores AI-generated visuals for KFC’s official Xiaohongshu account, drawing on its iconic products and brand content.</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal] mb-0">The project integrates AI generation into the social media content workflow to make visual ideation more efficient and develop a youthful, distinctive brand expression that can grow across formats. Each image is designed to create its own memorable moment while contributing to a cohesive and varied visual system.</p>
            <p className="leading-[normal]">​</p>
          </div>
          <div className="absolute bottom-[89.65%] font-kfc font-black leading-[0] left-[125px] text-[0px] top-[10.05%] tracking-[4.08px] w-[159px] whitespace-pre-wrap" data-node-id="400:1330">
            <p className="leading-[normal] mb-0 text-[23px] tracking-[5.29px]">项目概述</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="leading-[normal] mb-0 text-[34px]">​</p>
            <p className="font-kfc leading-[normal] text-[34px]">{`       `}</p>
          </div>
          <p className="absolute bottom-[86.88%] font-kfc leading-[normal] left-[123px] text-[23px] top-[12.82%] w-[187px]" data-node-id="432:29">
            BACKGROUND
          </p>
        </div>
      </div><AccountPosition paused={paused}/></div>;}
function FloatingShapes(){return <div className="floating-shapes" aria-hidden="true">{[[shapeGreen,746,81,24,24],[shapeRed,196,184,36,29],[shapeBlue,90,771,24,24]].map(([src,x,y,w,h])=><div key={src} style={{width:w,height:h,transform:"translate("+x+"px,"+y+"px)"}}><img src={src} alt=""/></div>)}</div>;}
const columns=[[imgFrame1,imgFrame],[img2,imgFrame2],[imgSlide431,imgFrame3],[imgFrame4,imgFrame5],[imgFrame6,imgFrame7]];
function SocialFeed({paused}){return <section className={"social-feed vertical-feed "+(paused?"is-paused":"")} aria-label="向上循环的社交媒体创意视觉"><div className="vertical-columns">{columns.map((pair,i)=><div key={i} className={"vertical-column column-"+i} style={{"--column-speed":[34,39,36,41,35][i]+"s","--feed-offset":[86.5,48.5,107.5,48.5,86.5][i]+"px"}}><div className="vertical-track">{[0,1,2].map(copy=><div className="vertical-set" key={copy} aria-hidden={copy?true:undefined}>{pair.map((src,j)=><img key={src} src={src} width="274" height="366" alt={copy?"":"KFC 社交媒体视觉 "+(i*2+j+1)} draggable="false"/>)}</div>)}</div></div>)}</div></section>;}
const foods=[
 {src:imgSingle21DieCut,x:494,y:757,w:327,h:199,iw:327,ih:199,r:0,alt:"黄金鸡块"},
 {src:imgId03121DieCut,x:925,y:480,w:854.442,h:794.236,iw:750.539,ih:676.75,r:-9.76,alt:"红豆派"},
 {src:img11241DieCut,x:-210,y:586,w:614.237,h:608.746,iw:461.899,ih:404.893,r:41.09,alt:"蛋挞"},
 {src:img21128Fn1DieCut,x:23,y:484,w:834.761,h:720.313,iw:701,ih:498,r:21.51,alt:"鸡肉卷"},
 {src:img1DieCut,x:610,y:670,w:556.012,h:463.85,iw:481.526,ih:351.188,r:-15,alt:"鸡腿堡"},
 {src:img2023111DieCut,x:739,y:557,w:772.774,h:783.145,iw:555.339,ih:583.672,r:30,alt:"薯条"}
];
function AccountPosition({paused}){
 const ref=useRef(null),animations=useRef([]),played=useRef(false);
 const [ready,setReady]=useState(false),[meme,setMeme]=useState(false);
 useEffect(()=>{
  const section=ref.current;
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduced){section.classList.add("settled");played.current=true;setReady(true);return;}
  let disposed=false;
  const observer=new IntersectionObserver(async entries=>{
   if(!entries.some(e=>e.isIntersecting)||played.current)return;played.current=true;observer.disconnect();
   const stickers=[...section.querySelectorAll(".food-sticker")];
   await Promise.all(stickers.map(el=>el.querySelector("img").decode().catch(()=>{})));
   if(disposed)return;
   section.classList.add("falling");
   const scale=section.getBoundingClientRect().width/1440;
   animations.current=stickers.map((el,i)=>{
    const bounds=el.getBoundingClientRect(),drop=-(bounds.top+bounds.height+80)/scale;
    const a=el.animate([
     {transform:"translateY("+drop+"px) rotate("+((i%2?1:-1)*12)+"deg)",opacity:1,offset:0,easing:"cubic-bezier(.45,0,.9,.7)"},
     {transform:"translateY(0) rotate(0)",opacity:1,offset:.77,easing:"ease-out"},
     {transform:"translateY(-24px) rotate("+((i%2?1:-1)*2)+"deg)",opacity:1,offset:.88,easing:"ease-in"},
     {transform:"translateY(0) rotate(0)",opacity:1,offset:1}
    ],{duration:900,delay:i*55,fill:"both"});
    if(section.dataset.paused==="true")a.pause();return a;
   });
   await Promise.all(animations.current.map(a=>a.finished.catch(()=>{})));
   if(disposed)return;
   section.classList.add("settled");
   const phone=section.querySelector(".account-phone");
   await phone.querySelector("img").decode().catch(()=>{});
   if(disposed)return;
   const rise=phone.animate([
    {transform:"translate3d(0,860px,0)",opacity:1},
    {transform:"translate3d(0,-12px,0)",opacity:1,offset:.86},
    {transform:"translate3d(0,0,0)",opacity:1}
   ],{duration:850,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"});
   animations.current=[rise];
   if(section.dataset.paused==="true")rise.pause();
   await rise.finished.catch(()=>{});
   if(disposed)return;
   animations.current=[];setReady(true);
  },{threshold:.5});
  observer.observe(section.querySelector(".fall-trigger"));
  return()=>{disposed=true;observer.disconnect();animations.current.forEach(a=>a.cancel());};
 },[]);
 useEffect(()=>{ref.current.dataset.paused=String(paused);animations.current.forEach(a=>paused?a.pause():a.play());},[paused]);
 return <section className={"account-position "+(ready?"labels-ready":"")} ref={ref} aria-label="账号定位">
  <img className="account-backdrop" src={imgVector18} alt=""/>
  <div className="account-masked" style={{maskImage:'url("'+imgRectangle13+'")'}}>
   {[583,693,803].map(x=><span className="account-stripe" key={x} style={{left:x}}/>)}
   <div className="account-phone"><img src={img7} alt="KFC 小红书账号页面"/></div>
  </div>
  <h2 className="account-trigger">账号调性关键词<br/>KEYWORDS</h2>
  <span className="fall-trigger" aria-hidden="true" style={{position:"absolute",left:0,top:720,width:1,height:40}}/>
  <div className="sticker-layer">{foods.map(f=><div className="food-sticker" key={f.src} style={{left:f.x,top:f.y,width:f.w,height:f.h}}><img src={f.src} alt={f.alt} style={{width:f.iw,height:f.ih,transform:"rotate("+f.r+"deg)"}}/></div>)}</div>
  <div className="keyword-slot idea-slot"><span className="keyword-label" tabIndex={ready?0:-1}>#脑洞感</span></div>
  <div className="keyword-slot brand-slot"><span className="keyword-label" tabIndex={ready?0:-1}>#品牌辨识度</span></div>
  <div className="keyword-slot meme-slot"><Button variant="ghost" className="keyword-label" disabled={!ready} aria-expanded={meme} aria-controls="meme-text" onClick={()=>setMeme(v=>!v)}>#梗文化</Button>{meme&&<span className="meme-text" id="meme-text" role="status">疯四。</span>}</div>
 </section>;
}
export default function KfcPage(){
 const host=useRef(null),[scale,setScale]=useState(1),[paused,setPaused]=useState(false);
 useLayoutEffect(()=>{setScale(host.current.clientWidth/WIDTH);const observer=new ResizeObserver(([entry])=>setScale(entry.contentRect.width/WIDTH));observer.observe(host.current);return()=>observer.disconnect();},[]);
 useEffect(()=>{
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const targets=host.current.querySelectorAll('[data-node-id="400:1328"],[data-node-id="400:1329"],[data-node-id="400:1330"],[data-node-id="432:29"],.account-trigger');
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("section-visible");observer.unobserve(e.target);}}),{threshold:.08});
  targets.forEach(el=>{el.classList.add("section-enter");observer.observe(el);});
  return()=>observer.disconnect();
 },[]);
 return <main ref={host} className={"portfolio updated-portfolio "+(paused?"motion-paused":"")}><h1 className="sr-only">KFC 社交媒体 AIGC 视觉设计</h1><div className="artboard-shell" style={{height:PAGE_HEIGHT*scale}}><div className="artboard" style={{transform:"scale("+scale+")"}}><Artwork paused={paused}/></div></div><Button variant="ghost" className="motion-toggle" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?"播放动效":"暂停动效"}</Button></main>;
}
