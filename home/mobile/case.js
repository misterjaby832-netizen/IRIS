(()=>{
 const placeholder='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
 // Only nearby artwork owns decoded bitmaps. Dimensions reserve every image's space.
 const observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{
  target.src=isIntersecting?target.dataset.src:placeholder;
 }),{rootMargin:'800px 0px'});
 document.querySelectorAll('img[data-src]').forEach(img=>observer.observe(img));
 const menu=document.querySelector('#iris-menu'),toggle=document.querySelector('.iris-navigation .iris-menu-toggle');
 toggle.addEventListener('click',()=>{menu.showModal();toggle.setAttribute('aria-expanded','true');});
 menu.addEventListener('close',()=>{toggle.setAttribute('aria-expanded','false');toggle.focus({preventScroll:true});});
 menu.addEventListener('click',event=>{if(event.target.closest('.iris-menu-close'))menu.close();});
 const preview=document.querySelector('.mobile-preview'),content=preview.querySelector('.preview-content');let trigger;
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-preview]');if(!button)return;trigger=button;content.replaceChildren();
  button.querySelectorAll('img').forEach(img=>{const clone=img.cloneNode();clone.src=img.dataset.src||img.src;clone.removeAttribute('data-src');content.append(clone);});
  preview.showModal();document.documentElement.style.overflow='hidden';
 });
 preview.querySelector('button').addEventListener('click',()=>preview.close());
 preview.addEventListener('close',()=>{content.replaceChildren();document.documentElement.style.overflow='';trigger?.focus({preventScroll:true});});
 document.addEventListener('play',event=>{if(event.target.tagName==='VIDEO')document.querySelectorAll('video').forEach(v=>{if(v!==event.target)v.pause();});},true);
 addEventListener('pagehide',()=>document.querySelectorAll('video').forEach(v=>v.pause()));
})();
