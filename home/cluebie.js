// 【可改·滚动滞后】数值越小，分区跟随越紧；最大位移保持小幅度。
const cluebieMotion={strength:.10,maxOffset:22,settle:.82};
const cluebieShell=document.querySelector('.cluebie-shell');
const cluebieArtboard=document.querySelector('.cluebie-artboard');
const cluebieFrames=[...cluebieArtboard.querySelector('[data-node-id="114:2"]').children].filter(node=>node.dataset.nodeId);
let cluebieScale=1;
function cluebieResize(){cluebieScale=cluebieShell.clientWidth/1440;cluebieArtboard.style.transform=`scale(${cluebieScale})`;cluebieShell.style.height=`${16881*cluebieScale}px`;}
new ResizeObserver(cluebieResize).observe(cluebieShell);cluebieResize();
const cluebieReducedPreference=matchMedia('(prefers-reduced-motion: reduce)');
const cluebieReduced={get matches(){return cluebieReducedPreference.matches;},addEventListener:(...args)=>cluebieReducedPreference.addEventListener(...args)};
let cluebiePrevious=scrollY,cluebieLag=0,cluebieFrame=0,cluebieLast=0;
function cluebieDraw(time){const elapsed=Math.min(40,time-cluebieLast||16)/16.67;cluebieLast=time;cluebieLag*=Math.pow(cluebieMotion.settle,elapsed);if(Math.abs(cluebieLag)<.1||cluebieReduced.matches)cluebieLag=0;cluebieArtboard.style.setProperty('--cover-extension',`${Math.max(0,cluebieLag)/cluebieScale}px`);cluebieFrames.forEach((node,index)=>node.style.setProperty('--frame-lag',`${index===0||node.dataset.nodeId==='2347:111'?0:cluebieLag/cluebieScale}px`));cluebieFrame=cluebieLag?requestAnimationFrame(cluebieDraw):0;}
addEventListener('scroll',()=>{const delta=scrollY-cluebiePrevious;cluebiePrevious=scrollY;if(cluebieReduced.matches)return;cluebieLag=Math.max(-cluebieMotion.maxOffset,Math.min(cluebieMotion.maxOffset,cluebieLag+delta*cluebieMotion.strength));if(!cluebieFrame)cluebieFrame=requestAnimationFrame(cluebieDraw);},{passive:true});
cluebieReduced.addEventListener('change',()=>{if(!cluebieFrame)cluebieFrame=requestAnimationFrame(cluebieDraw);});
// 固定导航与已有案例保持一致。
const cluebieDialog=document.querySelector('#iris-menu');
const cluebieToggle=document.querySelector('.iris-menu-toggle');
let cluebieOverflow='';
function cluebieCloseMenu(){cluebieDialog.close();document.body.style.overflow=cluebieOverflow;cluebieToggle.setAttribute('aria-expanded','false');cluebieToggle.focus({preventScroll:true});}
cluebieToggle.addEventListener('click',()=>{cluebieOverflow=document.body.style.overflow;cluebieDialog.showModal();document.body.style.overflow='hidden';cluebieToggle.setAttribute('aria-expanded','true');});
cluebieDialog.querySelector('.iris-menu-close').addEventListener('click',cluebieCloseMenu);
cluebieDialog.addEventListener('cancel',event=>{event.preventDefault();cluebieCloseMenu();});

// 影片：进入视野自动静音播放；悬停、聚焦或触摸时显示完整控制。
const opening=cluebieArtboard.querySelector('[data-node-id="114:3"]');
opening.innerHTML=`<div class="cluebie-player" tabindex="0" aria-label="周一拯救计划影片"><video playsinline muted preload="${(window.irisResolution?.phone||matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches)?'none':'metadata'}" poster="assets/cluebie/opening-1.webp"><source src="assets/cluebie/final-film-1080p.mp4" type="video/mp4"></video><div class="cluebie-video-controls"><button type="button" data-action="play" aria-label="播放或暂停">▶</button><span class="cluebie-video-time">0:00 / 0:00</span><input type="range" min="0" max="1000" value="0" aria-label="影片进度"><button type="button" data-action="mute" aria-label="开启或关闭声音">静音</button><button type="button" data-action="fullscreen" aria-label="全屏播放">全屏</button></div></div>`;
const player=opening.querySelector('.cluebie-player'),film=player.querySelector('video'),seek=player.querySelector('input');
const videoIcon=(content)=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${content}</svg>`;
const speaker='<path d="M11 5 6 9H3v6h3l5 4Z"/>';
const fullscreenHost=document.createElement('dialog');
fullscreenHost.className='cluebie-fullscreen-host';
fullscreenHost.setAttribute('aria-label','全屏影片');
document.body.append(fullscreenHost);
const playerHome=player.parentNode;
const fullscreenButton=player.querySelector('[data-action="fullscreen"]');
let fullscreenOverflow='';
let fullscreenMoving=false;
async function animatePlayer(from,to){
 if(cluebieReduced.matches)return;
 const transform=`translate(${from.left-to.left}px,${from.top-to.top}px) scale(${from.width/to.width},${from.height/to.height})`;
 const motion=player.animate([{transform},{transform:'none'}],{duration:520,easing:'cubic-bezier(.22,.7,.2,1)',fill:'both'});
 await motion.finished.catch(()=>{});motion.cancel();
}
function syncFullscreen(){
 const expanded=fullscreenHost.open;
 fullscreenButton.innerHTML=videoIcon(expanded?'<path d="M3 8h5V3m8 0v5h5M8 21v-5H3m18 0h-5v5"/>':'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>');
 fullscreenButton.setAttribute('aria-label',expanded?'退出全屏':'全屏播放');
 fullscreenButton.title=expanded?'退出全屏':'全屏播放';
}
async function closePlayerFullscreen(){
 if(fullscreenMoving||!fullscreenHost.open)return;
 fullscreenMoving=true;
 const from=player.getBoundingClientRect(),to=playerHome.getBoundingClientRect();
 if(!cluebieReduced.matches){
  const motion=player.animate([{transform:'none'},{transform:`translate(${to.left-from.left}px,${to.top-from.top}px) scale(${to.width/from.width},${to.height/from.height})`}],{duration:460,easing:'cubic-bezier(.22,.7,.2,1)',fill:'both'});
  await motion.finished.catch(()=>{});
  playerHome.append(player);motion.cancel();
 }else playerHome.append(player);
 fullscreenHost.close();
 document.body.style.overflow=fullscreenOverflow;syncFullscreen();fullscreenButton.focus({preventScroll:true});fullscreenMoving=false;
}
async function openPlayerFullscreen(){
 if(fullscreenMoving||fullscreenHost.open)return;
 fullscreenMoving=true;
 const from=player.getBoundingClientRect();
 fullscreenOverflow=document.body.style.overflow;
 fullscreenHost.append(player);fullscreenHost.showModal();document.body.style.overflow='hidden';syncFullscreen();
 fullscreenButton.focus({preventScroll:true});
 await animatePlayer(from,player.getBoundingClientRect());fullscreenMoving=false;
}
fullscreenHost.addEventListener('cancel',event=>{event.preventDefault();closePlayerFullscreen();});
syncFullscreen();
const formatTime=n=>Number.isFinite(n)?`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,'0')}`:'0:00';
function syncFilm(){seek.value=film.duration?Math.round(film.currentTime/film.duration*1000):0;player.querySelector('.cluebie-video-time').textContent=`${formatTime(film.currentTime)} / ${formatTime(film.duration)}`;player.querySelector('[data-action="play"]').innerHTML=videoIcon(film.paused?'<path d="m8 5 11 7-11 7Z"/>':'<path d="M8 5v14M16 5v14"/>');player.querySelector('[data-action="mute"]').innerHTML=videoIcon(speaker+(film.muted?'<path d="m16 9 6 6m0-6-6 6"/>':'<path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>'));}
syncFilm();film.addEventListener('volumechange',syncFilm);film.addEventListener('timeupdate',syncFilm);film.addEventListener('loadedmetadata',syncFilm);film.addEventListener('play',syncFilm);film.addEventListener('pause',syncFilm);
seek.addEventListener('input',()=>{if(film.duration)film.currentTime=seek.value/1000*film.duration;});
player.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{switch(button.dataset.action){case 'play':film.paused?film.play().catch(()=>{}):film.pause();break;case 'mute':film.muted=!film.muted;break;case 'fullscreen':fullscreenHost.open?closePlayerFullscreen():openPlayerFullscreen();break;}syncFilm();}));
if(!(window.irisResolution?.phone||matchMedia('(max-width:767px), (pointer:coarse) and (max-width:1024px)').matches))new IntersectionObserver(entries=>{if(fullscreenHost.open)return;if(entries[0].intersectionRatio>.55){film.play().catch(()=>{});}else film.pause();},{threshold:[0,.55]}).observe(opening);

// 各分区只改进入过程，完整展开后仍回到设计稿位置。
const theme=cluebieArtboard.querySelector('[data-node-id="114:4"]');
const assets=cluebieArtboard.querySelector('[data-node-id="114:6"]');
const scenes=cluebieArtboard.querySelector('[data-node-id="114:7"]');
const craft=cluebieArtboard.querySelector('[data-node-id="114:9"]');
const reveal=(node,delay=0)=>{if(!node)return;node.classList.add('cluebie-reveal');node.style.setProperty('--reveal-delay',`${delay}ms`);};
['124:7','124:8','124:9','124:12','2299:100'].forEach((id,i)=>reveal(theme.querySelector(`[data-node-id="${id}"]`),i*115));
const themeDecor=['2301:106','2301:109','2301:107','1069:194','1069:193','2226:253'].map(id=>theme.querySelector(`[data-node-id="${id}"]`)).filter(Boolean);
themeDecor.forEach(node=>node.classList.add('cluebie-decor-lag'));
let decorOffset=0,decorPrevious=scrollY,decorFrame=0;
function settleDecor(){decorOffset*=.88;if(Math.abs(decorOffset)<.1||cluebieReduced.matches)decorOffset=0;themeDecor.forEach((node,i)=>node.style.transform=`translateY(${decorOffset*(.7+i*.16)/cluebieScale}px)`);decorFrame=decorOffset?requestAnimationFrame(settleDecor):0;}
addEventListener('scroll',()=>{if(cluebieReduced.matches)return;const delta=scrollY-decorPrevious;decorPrevious=scrollY;decorOffset=Math.max(-35,Math.min(35,decorOffset+delta*.16));if(!decorFrame)decorFrame=requestAnimationFrame(settleDecor);},{passive:true});
['2339:12','2339:13','555:157','825:35992'].forEach((id,i)=>reveal(assets.querySelector(`[data-node-id="${id}"]`),i*170));
['126:24','126:25','126:26'].forEach((id,i)=>reveal(craft.querySelector(`[data-node-id="${id}"]`),i*160));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{rootMargin:'0px 0px -8% 0px',threshold:.1});
document.querySelectorAll('.cluebie-reveal').forEach(node=>revealObserver.observe(node));

// 场景图随滚动由两侧向设计稿位置收拢；回滑时自然分开。
const sceneRows=[{images:['555:146','2323:195'],label:'126:8',direction:-1},{images:['2343:82','2343:85'],label:'555:151',direction:1},{images:['555:149','555:150'],label:'555:153',direction:-1}].map(row=>({...row,nodes:row.images.map(id=>scenes.querySelector(`[data-node-id="${id}"]`)),caption:scenes.querySelector(`[data-node-id="${row.label}"]`)}));
sceneRows.forEach(row=>row.caption.classList.add('scene-caption'));
let sceneTick=0;
function updateScenes(){sceneTick=0;sceneRows.forEach(row=>{const rect=row.nodes[0].getBoundingClientRect();const progress=cluebieReduced.matches?1:Math.max(0,Math.min(1,(innerHeight*.94-rect.top)/(innerHeight*.48)));const eased=1-Math.pow(1-progress,3);row.nodes.forEach(node=>{node.style.setProperty('--scene-shift',`${row.direction*(1-eased)*150}px`);node.style.opacity=String(.45+eased*.55);});if(progress>=.995)row.caption.classList.add('has-arrived');});}
addEventListener('scroll',()=>{if(!sceneTick)sceneTick=requestAnimationFrame(updateScenes);},{passive:true});addEventListener('resize',updateScenes);updateScenes();

// 三组版本图：点击任一张，弹出可拖动分界线的前后对比。
const comparisons=[['2347:146','2347:148','纹理与水彩'],['2365:210','2365:212','镜头语言'],['2365:227','2370:229','情绪演出']];
const compareDialog=document.createElement('dialog');compareDialog.className='cluebie-compare-dialog';compareDialog.setAttribute('aria-label','调整前后图片对比');compareDialog.innerHTML='<button class="compare-close" type="button" aria-label="关闭对比">×</button><h2></h2><div class="compare-stage"><img class="compare-before" alt="调整前"><div class="compare-after-mask"><img class="compare-after" alt="调整后"></div><div class="compare-divider"></div><input type="range" min="0" max="100" value="50" aria-label="拖动比较调整前后"></div><div class="compare-labels"><span>调整前</span><span>调整后</span></div>';
document.body.append(compareDialog);const compareStage=compareDialog.querySelector('.compare-stage'),compareRange=compareStage.querySelector('input');
function setCompare(value){compareStage.style.setProperty('--compare-position',`${value}%`);compareRange.value=value;}
compareRange.addEventListener('input',()=>setCompare(compareRange.value));
compareStage.addEventListener('pointerdown',event=>{if(event.target===compareRange)return;compareStage.setPointerCapture(event.pointerId);setCompare(Math.max(0,Math.min(100,(event.clientX-compareStage.getBoundingClientRect().left)/compareStage.clientWidth*100)));});
compareStage.addEventListener('pointermove',event=>{if(!compareStage.hasPointerCapture(event.pointerId))return;setCompare(Math.max(0,Math.min(100,(event.clientX-compareStage.getBoundingClientRect().left)/compareStage.clientWidth*100)));});
compareDialog.querySelector('.compare-close').addEventListener('click',()=>compareDialog.close());compareDialog.addEventListener('click',event=>{if(event.target===compareDialog)compareDialog.close();});
comparisons.forEach(([beforeId,afterId,title],index)=>{const before=craft.querySelector(`[data-node-id="${beforeId}"]`),after=craft.querySelector(`[data-node-id="${afterId}"]`);[before,after].forEach((node,i)=>{if(!node)return;node.classList.add('cluebie-compare-trigger');node.tabIndex=0;node.setAttribute('role','button');node.setAttribute('aria-label',`放大比较${title}的前后版本`);reveal(node,index*90+i*90);revealObserver.observe(node);const open=()=>{compareDialog.querySelector('h2').textContent=title;copyCompareCrop(compareDialog.querySelector('.compare-before'),before);copyCompareCrop(compareDialog.querySelector('.compare-after'),after);setCompare(50);compareDialog.showModal();};node.addEventListener('click',open);node.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open();}});});});

// 将设计稿中的裁切比例同步到放大画面，避免露出原图边缘。
function copyCompareCrop(target,node){const img=node.querySelector('img'),frame=node.getBoundingClientRect(),rect=img.getBoundingClientRect();const original=img.dataset.resolutionBase||img.dataset.phoneSrc||img.src;target.dataset.resolutionBase=original;target.src=window.irisResolution?.source(original)||img.src;target.style.width=`${rect.width/frame.width*100}%`;target.style.height=`${rect.height/frame.height*100}%`;target.style.left=`${(rect.left-frame.left)/frame.width*100}%`;target.style.top=`${(rect.top-frame.top)/frame.height*100}%`;target.style.objectFit=getComputedStyle(img).objectFit;}
// 图片先进入，再出现各自下方的说明与小圆点。
const craftCaptions=[['2347:146',['126:30','2365:182']],['2347:148',['132:9','2365:183']],['2365:210',['2365:202','2365:206']],['2365:212',['2365:207','2365:208']],['2365:227',['2365:219','2365:223']],['2370:229',['2365:224','2365:225']]];
const captionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{const ids=craftCaptions.find(([id])=>id===entry.target.dataset.nodeId)?.[1]||[];ids.forEach(id=>craft.querySelector(`[data-node-id="${id}"]`)?.classList.toggle('caption-arrived',entry.isIntersecting));}),{threshold:.3});
craftCaptions.forEach(([imageId,ids])=>{ids.forEach(id=>craft.querySelector(`[data-node-id="${id}"]`)?.classList.add('craft-caption'));captionObserver.observe(craft.querySelector(`[data-node-id="${imageId}"]`));});
