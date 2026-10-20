// 【可改·动效参数】frame 和 Background 主视觉分别有轻微滞后。
const motion={strength:.10,maxOffset:22,settle:.82,coverOverlap:3,heroStrength:.20,heroMaxOffset:38,heroSettle:.87};
const artboard=document.querySelector('.panerai-artboard');
const shell=document.querySelector('.panerai-shell');
const frames=[...document.querySelectorAll('.panerai-frame')];
// 【可改·展开时长】单位毫秒；截止位置按新版首屏长图上缘设置。
const displayMotion={foldHeight:6211,fullHeight:14216,scrollOffset:116};
let pageHeight=displayMotion.foldHeight;
let scale=1;
function resize(){scale=shell.clientWidth/1440;artboard.style.transform=`scale(${scale})`;shell.style.height=`${pageHeight*scale}px`;}
new ResizeObserver(resize).observe(shell);resize();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let previous=scrollY,lag=0,heroLag=0,frame=0,lastTime=0;
function draw(time){
 const elapsed=Math.min(40,time-lastTime||16)/16.67;
 lag*=Math.pow(motion.settle,elapsed);heroLag*=Math.pow(motion.heroSettle,elapsed);lastTime=time;
 if(Math.abs(lag)<.1||reduced.matches)lag=0;
 if(Math.abs(heroLag)<.1||reduced.matches)heroLag=0;
 // 【勿改·衔接计算】封面背景补足下一帧的滞后位移，文字保持原尺寸。
 artboard.style.setProperty('--cover-extension',`${Math.max(0,lag)/scale+motion.coverOverlap}px`);
 frames.forEach((element,index)=>element.style.setProperty('--frame-lag',`${index===0?0:lag/scale}px`));
 artboard.style.setProperty('--background-hero-lag',`${heroLag/scale}px`);
 frame=lag||heroLag?requestAnimationFrame(draw):0;
}
addEventListener('scroll',()=>{
 const delta=scrollY-previous;previous=scrollY;
 if(reduced.matches)return;
 lag=Math.max(-motion.maxOffset,Math.min(motion.maxOffset,lag+delta*motion.strength));
 heroLag=Math.max(-motion.heroMaxOffset,Math.min(motion.heroMaxOffset,heroLag+delta*motion.heroStrength));
 if(!frame)frame=requestAnimationFrame(draw);
},{passive:true});
reduced.addEventListener('change',()=>{if(!frame)frame=requestAnimationFrame(draw);});

// 【可改·受众分析动效】随滚动进度展开，可反向收回；数值为视口高度比例。
const audienceMotion={start:.95,end:.48,smoothing:.14,innerScale:.12,outerScale:.18};
const audience=document.querySelector('[data-node-id="471:64"]');
if(audience){
 const canvas=audience.querySelector('[data-node-id="671:2"]');
 const center=audience.querySelector('[data-node-id="682:80"]');
 // 【勿改·分组坐标】复用原图层；每组以中心标题为原点缩放。
 function layer(ids,innerCoordinates){
  const group=document.createElement('div');group.className='audience-expand-layer';canvas.append(group);
  ids.forEach(id=>{
   const element=audience.querySelector(`[data-node-id="${id}"]`);
   if(innerCoordinates.includes(id)){
    element.style.width=getComputedStyle(element).width;
    element.style.right='auto';
    element.style.left=`${parseFloat(getComputedStyle(element).left)+62}px`;
    element.style.top=`${parseFloat(getComputedStyle(element).top)+157}px`;
   }
   group.append(element);
  });
  return group;
 }
 const people=layer(['671:13','673:2','671:29','671:30','673:3','671:38','671:39','673:4','671:47','671:48','692:906'],['671:13']);
 const outer=layer(['681:3','681:8','681:9','681:10','681:11','699:10474','699:10475'],['699:10474','699:10475']);
 const clamp=value=>Math.max(0,Math.min(1,value));
 const ease=value=>value*value*(3-2*value);
 let progress=0,target=0,animation=0;
 function paint(){
  const inner=ease(clamp(progress/.65));
  const ring=ease(clamp((progress-.45)/.55));
  [[people,inner,audienceMotion.innerScale],[outer,ring,audienceMotion.outerScale]].forEach(([element,value,start])=>{
   element.style.opacity=value;
   element.style.scale=start+(1-start)*value;
  });
 }
 function tick(){
  progress+=(target-progress)*audienceMotion.smoothing;
  if(Math.abs(target-progress)<.001)progress=target;
  paint();animation=progress===target?0:requestAnimationFrame(tick);
 }
 function update(){
  // 中心到达视口底部附近开始，接近视口中部时完整展开。
  const centerY=center.getBoundingClientRect().top+center.getBoundingClientRect().height/2;
  target=reduced.matches?1:clamp((innerHeight*audienceMotion.start-centerY)/(innerHeight*(audienceMotion.start-audienceMotion.end)));
  if(reduced.matches){progress=1;paint();}
  else if(!animation)animation=requestAnimationFrame(tick);
 }
 paint();update();
 addEventListener('scroll',update,{passive:true});
 addEventListener('resize',update);
 reduced.addEventListener('change',update);
}

// 【导航交互】复用 KFC 的抽屉菜单，关闭后将焦点返回菜单按钮。
const navDialog=document.querySelector('#iris-menu');
const navToggle=document.querySelector('.iris-menu-toggle');
let navPreviousOverflow='';
function closeNavigation(){navDialog.close();document.body.style.overflow=navPreviousOverflow;navToggle.setAttribute('aria-expanded','false');navToggle.focus({preventScroll:true});}
navToggle.addEventListener('click',()=>{navPreviousOverflow=document.body.style.overflow;navDialog.showModal();document.body.style.overflow='hidden';navToggle.setAttribute('aria-expanded','true');});
navDialog.querySelector('.iris-menu-close').addEventListener('click',closeNavigation);
navDialog.addEventListener('cancel',event=>{event.preventDefault();closeNavigation();});
navDialog.addEventListener('click',event=>{if(event.target===navDialog&&event.clientX<navDialog.getBoundingClientRect().left)closeNavigation();});

// 【可改·设计挑战动效】卡片进入视口后按顺序浮现，滚回时保持稳定。
const challengeFrame=document.querySelector('#frame-707-2');
if(challengeFrame){
 const cards=[
  ['717:22776','717:22782','717:25810'],
  ['717:18418','717:16179','717:18812'],
  ['717:22723','717:22729','739:4207']
 ];
 cards.forEach(([cardId,answerId,surfaceId])=>{
  const card=challengeFrame.querySelector(`[data-node-id="${cardId}"]`);
  const answer=challengeFrame.querySelector(`[data-node-id="${answerId}"]`);
  const surface=challengeFrame.querySelector(`[data-node-id="${surfaceId}"]`);
  card?.classList.add('challenge-card');answer?.classList.add('challenge-answer');
  if(!card||!surface)return;
  surface.tabIndex=0;surface.setAttribute('role','button');surface.setAttribute('aria-label',`${card.dataset.name||'设计挑战'}，展开回答`);
  surface.setAttribute('aria-expanded','false');
  function toggle(){const open=card.classList.toggle('answer-open');surface.setAttribute('aria-expanded',String(open));}
  card.addEventListener('click',toggle);
  surface.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();toggle();}});
 });
 function revealAtBottom(){
  if(challengeFrame.getBoundingClientRect().bottom>innerHeight+20)return;
  challengeFrame.classList.add('challenge-visible');
  removeEventListener('scroll',revealAtBottom);
  removeEventListener('resize',revealAtBottom);
 }
 addEventListener('scroll',revealAtBottom,{passive:true});
 addEventListener('resize',revealAtBottom);
 revealAtBottom();
}

// 【可改·页面展示交互】点击一次展开，并平滑下移到首屏长图；手动滚动可打断。
const expandButton=document.querySelector('.display-expand');
const displayDetails=document.querySelector('#display-details');
const responseFrame=document.querySelector('#frame-739-5539');
displayDetails.inert=true;responseFrame.inert=true;
displayDetails.setAttribute('aria-hidden','true');responseFrame.setAttribute('aria-hidden','true');
let displayExpanded=false;
expandButton.addEventListener('click',()=>{
 if(displayExpanded)return;
 displayExpanded=true;
 expandButton.setAttribute('aria-expanded','true');
 artboard.classList.add('display-expanded');
 displayDetails.inert=false;responseFrame.inert=false;
 displayDetails.removeAttribute('aria-hidden');responseFrame.removeAttribute('aria-hidden');
 const hero=document.querySelector('[data-node-id="2198:115"]');
 const targetY=scrollY+hero.getBoundingClientRect().top-displayMotion.scrollOffset;
 // 一次性展开高度，浏览器原生平滑滚动负责视角移动，避免逐帧重排长图。
 pageHeight=displayMotion.fullHeight;
 resize();
 requestAnimationFrame(()=>window.scrollTo({top:targetY,behavior:reduced.matches?'instant':'smooth'}));
});
// 每组：引线、文字与图标。保留原图层，不移动结构分析。
const annotationGroups=[
 ['2198:202',['2198:199','2198:200','2198:205'],false],
 ['2198:192',['2198:212','2198:215'],true],
 ['2198:187',['2198:237'],false],
 ['2408:473',['2198:173'],true],
 ['2408:479',['2198:163','2198:164','2198:165'],false],
 ['2198:154',['2198:230','2198:233'],true],
 ['2198:150',['2198:221','2198:224'],false],
 ['2198:117',['2198:121','2198:124'],true]
].map(([line,ids,left])=>{
 const leader=document.querySelector(`[data-node-id="${line}"]`);
 const content=ids.map(id=>document.querySelector(`[data-node-id="${id}"]`)).filter(Boolean);
 leader?.classList.add('annotation-leader');if(left)leader?.classList.add('leader-left');
 content.forEach(el=>el.classList.add('annotation-content'));
 return {leader,content,shown:false};
});
let annotationTick=0;
function revealAnnotations(){
 annotationTick=0;if(!displayExpanded)return;
 annotationGroups.forEach(group=>{
  if(group.shown||!group.leader)return;
  const rect=group.leader.getBoundingClientRect();
  if(rect.top+rect.height*.3>innerHeight*.88)return;
  group.shown=true;group.leader.classList.add('is-visible');group.content.forEach(el=>el.classList.add('is-visible'));
 });
}
function queueAnnotations(){if(!annotationTick)annotationTick=requestAnimationFrame(revealAnnotations);}
addEventListener('scroll',queueAnnotations,{passive:true});addEventListener('resize',queueAnnotations);expandButton.addEventListener('click',queueAnnotations);


// 【可改·渐显】离开屏幕后复位，再次滑入时重复；只改变透明度。
const fadeIds=['477:84','818:29153','774:14218','818:22894','818:24992','818:24993','523:131'];
const fadeObserver=new IntersectionObserver(entries=>{
 entries.forEach(({target,isIntersecting})=>target.classList.toggle('fade-visible',isIntersecting));
},{threshold:.12});
fadeIds.forEach(id=>{const el=document.querySelector(`[data-node-id="${id}"]`);if(el){el.classList.add('display-copy-fade');fadeObserver.observe(el);}});
// 【可改·结构分析】中心文字先浮现，两条线向两侧展开，再显示两端文字。
const structure=document.querySelector('[data-node-id="1772:114"]');
const structureTitle=structure?.querySelector('[data-node-id="1832:267"]');
if(structureTitle){
 structure.classList.add('structure-reveal');
 new IntersectionObserver(entries=>{
  entries.forEach(({isIntersecting})=>structure.classList.toggle('structure-visible',isIntersecting));
 },{threshold:.3}).observe(structureTitle);
}
