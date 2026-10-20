// Select the mobile asset before the browser starts decoding the desktop source.
const mobile = window.matchMedia('(max-width: 767px)').matches;
export default function ResponsiveImage({src, loading, fetchPriority, ...props}) {
 const optimized = mobile && typeof src === 'string' && /^\/kfc\/assets\/[^?]+\.(png|jpe?g|webp)$/i.test(src)
  ? src.replace('/assets/', '/assets/mobile/').replace(/\.(png|jpe?g|webp)$/i, '.webp') : src;
 return <img {...props} src={optimized} loading={loading || (fetchPriority === 'high' ? 'eager' : 'lazy')} fetchPriority={fetchPriority} decoding="async"/>;
}
