(()=>{
 if(document.querySelector('.case-next-footer'))return;
 const main=location.origin+'/';
 const kfc=main+'kfc/';
 const current=document.querySelector('.panerai-shell')?'panerai':document.querySelector('.cluebie-shell')?'cluebie':'kfc';
 const nextDesktop=current==='kfc'?main+'panerai.html':current==='panerai'?main+'cluebie.html':kfc;
 const next=document.documentElement.classList.contains('mobile-case')?main+'mobile/'+(current==='kfc'?'panerai':current==='panerai'?'cluebie':'kfc')+'.html':nextDesktop;
 const name=current==='kfc'?'Panerai':current==='panerai'?'Cluebie':'KFC';
 const style=document.createElement('link');style.rel='stylesheet';style.href=new URL('case-footer.css?v=18',document.currentScript.src).href;document.head.append(style);
 const menu=document.querySelector('#iris-menu');
 if(menu){
  const close=menu.querySelector('.iris-menu-close');
  const head=document.querySelector('.iris-navigation').cloneNode(true);
  head.classList.add('iris-menu-heading');
  const button=head.querySelector('.iris-menu-toggle');
  close.className='iris-menu-toggle iris-menu-close';close.textContent='×';button.replaceWith(close);
  head.querySelectorAll('a').forEach(a=>a.target='_top');
  const nav=document.createElement('nav');nav.setAttribute('aria-label','主导航');
  [['home','Homepage','返回首页'],['works','Works','选择作品'],['about','About me','个人信息']].forEach(([asset,title,caption])=>{
   const a=document.createElement('a');a.className='iris-module-link';a.href=main+(asset==='home'?'#home':asset==='works'?'#work':'#about');a.target='_top';a.setAttribute('aria-label',title+'，'+caption);
   if(asset==='works')a.setAttribute('aria-current','location');
   a.innerHTML=`<span class="iris-module-title"><img src="${new URL('assets/menu-'+asset+'.svg',style.href).href}" alt="${title}"></span><span class="iris-module-caption">${caption}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20 20 4M4 4h16v16"/></svg></span>`;nav.append(a);
  });
  menu.replaceChildren(head,nav);
 }
 const footer=document.createElement('footer');footer.className='case-next-footer';footer.id='next-case';
 const art=document.createElement('img');art.src=new URL('assets/case-next-footer.png',document.currentScript.src).href;art.alt='NEXT CASE';art.loading='lazy';art.width=1440;art.height=900;
 const link=document.createElement('a');link.href=next;link.className='case-next-arrow';link.setAttribute('aria-label','下一个项目：'+name);link.innerHTML='<span class="case-next-focus" aria-hidden="true"></span>';
 const ground=document.createElement('div');ground.className='case-next-ground';ground.style.backgroundImage=`linear-gradient(#121212 0%,#121212e8 25%,#12121299 60%,#12121270),url("${new URL('assets/case-next-ground.webp',document.currentScript.src).href}")`;
 const type=document.createElement('div');type.className='case-next-type';type.setAttribute('aria-hidden','true');const typeImage=art.cloneNode();typeImage.alt='';type.append(typeImage);
 const filter=document.createElementNS('http://www.w3.org/2000/svg','svg');filter.setAttribute('width','0');filter.setAttribute('height','0');filter.style.position='absolute';filter.innerHTML='<defs><filter id="case-footer-ink" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  20 0 0 0 -10.4"/></filter></defs>';
 link.innerHTML+='<svg class="case-next-arrow-art" viewBox="0 0 144 144" aria-hidden="true"><circle cx="72" cy="72" r="63"/><path d="M47 72h50M73 47l25 25-25 25"/></svg>';
 footer.append(filter,ground,art,type,link);document.body.append(footer);
 // The outer document owns the one persistent overlay and next-case container.
 const nested=window.parent!==window&&new URLSearchParams(location.search).get('iris-shell')==='1';
 let shellReady;
 if(!nested){
  window.irisCaseShellConfig={origins:[location.origin,new URL(main).origin,new URL(kfc).origin],svg:window.irisLoadingSvg};
  shellReady=window.irisCaseShell?Promise.resolve():new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=new URL('case-shell.js?v=3',style.href).href;script.onload=resolve;script.onerror=reject;document.body.append(script);});
 }
 link.addEventListener('click',async event=>{
  if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target==='_blank')return;
  event.preventDefault();
  const logo=(document.querySelector('.iris-shell-nav-svg')||document.querySelector('.iris-nav-logo img'))?.getBoundingClientRect().toJSON();
  if(nested){document.documentElement.classList.add('iris-shell-nav-held');const params=new URLSearchParams(location.search);window.parent.postMessage({type:'iris-shell-next',url:next,logo},params.get('iris-parent'));}
  else{await shellReady;window.irisCaseShell.go(next,logo);}
 });
 if(nested)document.addEventListener('click',event=>{
  const anchor=event.target.closest('a[href]');if(!anchor||anchor===link||event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||anchor.target==='_blank')return;
  const target=new URL(anchor.href);if(target.origin===location.origin&&target.pathname===location.pathname&&target.hash)return;
  event.preventDefault();const params=new URLSearchParams(location.search);window.parent.postMessage({type:'iris-shell-exit',url:anchor.href,token:params.get('iris-token')},params.get('iris-parent'));
 });
})();
