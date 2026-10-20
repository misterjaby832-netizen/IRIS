"""Regenerate orientation-specific images locally (requires Pillow)."""
from pathlib import Path
from PIL import Image,ImageOps
import hashlib,json
root=Path(__file__).resolve().parent.parent
variants={}
for base,urlbase,is_kfc in [(root/'home/assets','/assets/',False),(root/'kfc/public/assets','/kfc/assets/',True)]:
 for source in sorted(base.rglob('*')):
  rel=source.relative_to(base)
  if source.suffix.lower() not in ('.png','.jpg','.jpeg','.webp') or any(p in ('mobile','mobile-landscape') for p in rel.parts):continue
  with Image.open(source) as raw:
   image=ImageOps.exif_transpose(raw)
   if image.width<=480 and image.height<=1920:continue
   key=urlbase+rel.as_posix();stamp=hashlib.sha1(key.encode()).hexdigest()[:16]
   item={}
   for tier,limits in [('portrait',(480,1920)),('landscape',(960,3840))]:
    if is_kfc:
     folder='mobile' if tier=='portrait' else 'mobile-landscape'
     dest=base/folder/rel.with_suffix('.webp');url='/kfc/assets/'+folder+'/'+rel.with_suffix('.webp').as_posix()
    else:
     dest=root/'home/resolution'/tier/(stamp+'.webp');url='/resolution/'+tier+'/'+stamp+'.webp'
    dest.parent.mkdir(parents=True,exist_ok=True)
    resized=image.copy();resized.thumbnail(limits)
    if resized.mode not in ('RGB','RGBA'):resized=resized.convert('RGBA' if 'A' in resized.getbands() else 'RGB')
    resized.save(dest,'WEBP',quality=87,method=4)
    item[tier]=url
   variants[key]=item
(root/'home/image-tiers.js').write_text('window.irisImageTiers='+json.dumps(variants,separators=(',',':'))+';\n')
print('Generated orientation variants for',len(variants),'images')
