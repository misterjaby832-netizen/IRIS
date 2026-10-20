const menu = document.querySelector('#menu');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const page = [document.querySelector('main'), document.querySelector('footer')];
let isOpen = false;
let previousOverflow = '';
const menuItems = [...menu.querySelectorAll('.menu-item')];
function selectMenuSection(id) {
  menuItems.forEach(link => {
    if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function currentMenuSection() {
  const checkpoint = innerHeight * .4;
  return ['about', 'work', 'home'].find(id => document.getElementById(id).getBoundingClientRect().top <= checkpoint) || 'home';
}
menuItems.forEach(link => link.addEventListener('click', event => {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  selectMenuSection(link.hash.slice(1));
  setMenu(false);
  history.pushState(null, '', link.hash);
  document.querySelector(link.hash).scrollIntoView({behavior:'instant',block:'start'});
}));
function setMenu(open) {
  if (open === isOpen) return;
  isOpen = open;
  if (open) { previousOverflow = document.body.style.overflow; selectMenuSection(currentMenuSection()); }
  document.body.style.overflow = open ? 'hidden' : previousOverflow;
  document.body.classList.toggle('menu-is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  menu.inert = !open;
  menu.setAttribute('aria-hidden', String(!open));
  page.forEach(element => { element.inert = open; });
  toggle.focus({preventScroll: true});
}
toggle.addEventListener('click', () => setMenu(!isOpen));
[...menu.querySelectorAll('a'), ...navigation.querySelectorAll('a')].forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('keydown', event => {
  if (!isOpen) return;
  if (event.key === 'Escape') { event.preventDefault(); setMenu(false); }
  if (event.key === 'Tab') {
    const controls = [...navigation.querySelectorAll('a,button'), ...menu.querySelectorAll('a')];
    const current = controls.indexOf(document.activeElement);
    if (event.shiftKey && current <= 0) { event.preventDefault(); controls.at(-1).focus(); }
    else if (!event.shiftKey && current === controls.length - 1) { event.preventDefault(); controls[0].focus(); }
  }
});
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const footer = document.querySelector('.footer-art');
const headerLogo = navigation.querySelector('.wordmark');
const contactLogo = document.querySelector('.footer-logo');
const flyingLogo = contactLogo.querySelector('img').cloneNode();
flyingLogo.className = 'iris-handoff';
flyingLogo.alt = '';
flyingLogo.setAttribute('aria-hidden', 'true');
document.body.append(flyingLogo);
document.documentElement.classList.add('has-logo-handoff');
let frame;
function draw() {
  frame = 0;
  // 遮罩固定在联系页边界，图片不再上下偏移，以免露出硬边。
  footer.style.transform = 'none';
  const distance = Math.max(0, document.documentElement.scrollHeight - innerHeight - scrollY);
  // 【可改·动画范围】最后 55% 屏幕高度内，导航标志逐渐落到联系页。
  const raw = isOpen ? 0 : Math.max(0, Math.min(1, 1 - distance / (innerHeight * .55)));
  const progress = reduced.matches ? (raw > .5 ? 1 : 0) : raw * raw * (3 - 2 * raw);
  const start = headerLogo.getBoundingClientRect();
  const end = contactLogo.getBoundingClientRect();
  headerLogo.style.visibility = progress > 0 ? 'hidden' : '';
  flyingLogo.style.display = progress > 0 ? 'block' : 'none';
  const mix = (a, b) => a + (b - a) * progress;
  Object.assign(flyingLogo.style, {
    left: `${mix(start.left, end.left)}px`, top: `${mix(start.top, end.top)}px`,
    width: `${mix(start.width, end.width)}px`, height: `${mix(start.height, end.height)}px`
  });
}
function request() { if (!frame) frame = requestAnimationFrame(draw); }
addEventListener('scroll', request, {passive: true});
addEventListener('resize', request);
reduced.addEventListener('change', request);
draw();
new MutationObserver(request).observe(document.body, {attributes:true, attributeFilter:['class']});

// 本地预览进入正在编辑的 KFC 页面；正式网址继续使用已发布的项目链接。
if (location.hostname === '127.0.0.1' || location.hostname === 'localhost') {
  document.querySelectorAll('.kfc-card').forEach(link => {
    link.href = '/kfc/';
  });
}

// 首页离场：整体左移淡出，预取目标文档，不再放大卡片。
let projectOpening = false;
let navigationLoaderTimer;
const prefetched = new Set();
function prepareCase(link) {
  if (prefetched.has(link.href)) return;
  prefetched.add(link.href);
  const hint = document.createElement('link');
  hint.rel = 'prefetch'; hint.as = 'document'; hint.href = link.href;
  document.head.append(hint);
}
document.querySelectorAll('.project-grid article a[href]').forEach(link => {
  link.addEventListener('pointerenter', () => prepareCase(link), {once:true});
  link.addEventListener('focus', () => prepareCase(link), {once:true});
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank') return;
    if (projectOpening) {event.preventDefault(); return;}
    if (reduced.matches) return;
    event.preventDefault(); projectOpening = true; prepareCase(link);
    try {sessionStorage.setItem('iris-case-entry', JSON.stringify({url:link.href,time:Date.now()}));} catch {}
    const surfaces = [...document.body.children].filter(el => !['SCRIPT','STYLE'].includes(el.tagName));
    const animations = surfaces.map(el => el.animate([
      {translate:'0px 0px',opacity:1},
      {translate:'-56px 0px',opacity:0}
    ], {duration:300,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'}));
    Promise.all(animations.map(a => a.finished)).then(() => {
      navigationLoaderTimer=setTimeout(()=>window.irisShowLoading?.(),400);
      location.assign(link.href);
    });
  });
});
addEventListener('pageshow', event => {
  clearTimeout(navigationLoaderTimer);
  document.body.getAnimations({subtree:true}).filter(a => a.effect?.getTiming().fill === 'forwards').forEach(a => a.cancel());
  projectOpening = false;
  if(event.persisted)document.querySelectorAll('.iris-page-loader.is-loading').forEach(loader=>loader.remove());
});

// 向下滚动时渐显客户标志与 About Me 标题；每个区域只播放一次。
if (!reduced.matches) {
  const reveals = [
    ['.clients h2', 0],
    ['.client-logos', 150],
    ['.about-title', 0]
  ];
  const elements = [];
  reveals.forEach(([selector, delay]) => {
    document.querySelectorAll(selector).forEach(element => {
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${delay}ms`);
      elements.push(element);
    });
  });
  document.documentElement.classList.add('has-scroll-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {threshold: 0.12, rootMargin: '0px 0px -7% 0px'});
    elements.forEach(element => observer.observe(element));
  } else {
    // 兼容缺少 IntersectionObserver 的预览浏览器。
    let revealFrame = 0;
    function revealVisible() {
      revealFrame = 0;
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < innerHeight * .93 && rect.bottom > 0) element.classList.add('is-visible');
      });
    }
    function requestReveal() { if (!revealFrame) revealFrame = requestAnimationFrame(revealVisible); }
    addEventListener('scroll', requestReveal, {passive: true});
    addEventListener('resize', requestReveal);
    requestReveal();
  }
}

// 作品卡片和肖像跟随滚动产生轻微惯性，停下后平滑回到原位。
if (!reduced.matches) {
  const heading = document.querySelector('.work .section-heading');
  const cards = [...document.querySelectorAll('.project-grid article')];
  const portrait = document.querySelector('.portrait');
  const lagItems = [heading, ...cards, portrait];
  let lastScrollY = scrollY;
  let lag = 0;
  let lagFrame = 0;
  function drawLag() {
    lag *= .84;
    if (Math.abs(lag) < .15) lag = 0;
    lagItems.forEach((element, index) => {
      const strength = element === portrait ? 1.25 : element === heading ? 1 : 1 - (index - 1) * .12;
      element.style.setProperty('--scroll-lag', `${(lag * strength).toFixed(2)}px`);
    });
    lagFrame = lag ? requestAnimationFrame(drawLag) : 0;
  }
  addEventListener('scroll', () => {
    const delta = scrollY - lastScrollY;
    lastScrollY = scrollY;
    lag = Math.max(-85, Math.min(85, lag + delta * .32));
    if (!lagFrame) lagFrame = requestAnimationFrame(drawLag);
  }, {passive: true});
}
