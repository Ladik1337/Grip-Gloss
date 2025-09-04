function toggleLang(){ alert('Переключение RU/EN (демо)'); }
function initSliders(){
  document.querySelectorAll('.slider').forEach(slider=>{
    let i=0, imgs=slider.querySelectorAll('img');
    if(!imgs.length) return;
    imgs[0].classList.add('active');
    setInterval(()=>{
      imgs[i].classList.remove('active');
      i=(i+1)%imgs.length;
      imgs[i].classList.add('active');
    },3000);
  });
}
window.addEventListener('load', initSliders);
