// Keep each design's original coordinate system inside an independent sheet.
export default function ScrollPanel({start,end,index,color,children}){
 const offset=start>=5200?280:0;
 const extra=end===5200?280:0;
 return <section className={'scroll-panel'+(start===5200?' screening-panel':'')+([6959,7879].includes(start)?' refinement-panel':'')} data-panel-start={start+offset} data-panel-end={end+offset+extra} style={{top:start+offset,height:end-start+extra+(end===5200?80:0),zIndex:index,background:color}}>
  <div className="scroll-panel-design" style={{top:-start}}>{children}</div>
 </section>;
}
