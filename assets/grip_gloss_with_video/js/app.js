
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;
function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
}
if(nextBtn && prevBtn){
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
}
