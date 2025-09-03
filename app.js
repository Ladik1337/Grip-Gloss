
(function(){
  const c=document.getElementById('bg-particles');if(!c)return;
  const ctx=c.getContext('2d');let w,h,pxRatio=Math.max(1,window.devicePixelRatio||1);
  const dots=[];const DOTS=70;
  function resize(){w=c.clientWidth;h=c.clientHeight;c.width=w*pxRatio;c.height=h*pxRatio;ctx.setTransform(pxRatio,0,0,pxRatio,0,0)}
  window.addEventListener('resize',resize);resize();
  for(let i=0;i<DOTS;i++){dots.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*0.6,vy:(Math.random()-.5)*0.6,r:1+Math.random()*2})}
  function step(){ctx.clearRect(0,0,w,h);for(let i=0;i<dots.length;i++){const a=dots[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1;ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fillStyle='rgba(20,201,138,0.6)';ctx.fill();for(let j=i+1;j<dots.length;j++){const b=dots[j];const dx=a.x-b.x,dy=a.y-b.y;const d=Math.sqrt(dx*dx+dy*dy);if(d<140){ctx.strokeStyle='rgba(20,201,138,'+(1-d/140)*0.25+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}requestAnimationFrame(step)}
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){step()}
})();
function setupReveals(){const sections=document.querySelectorAll('section,.parallax,.tariffs,.about,.contact');sections.forEach((s,i)=>{const cls=i%3===0?'reveal-left':i%3===1?'reveal-right':'reveal-up';s.classList.add(cls)})}
window.addEventListener('load',setupReveals);
function observeReveals(){const els=document.querySelectorAll('.reveal-left,.reveal-right,.reveal-up');const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal-show');io.unobserve(e.target)}})},{threshold:0.2});els.forEach(el=>io.observe(el))}
window.addEventListener('load',observeReveals);
function animateCarImages(){const trigger=window.innerHeight*0.85;document.querySelectorAll('.tariffs .tariff-card').forEach(el=>{const rect=el.getBoundingClientRect();if(rect.top<trigger){el.classList.add('visible')}})}
window.addEventListener('scroll',animateCarImages);
window.addEventListener('load',animateCarImages);
