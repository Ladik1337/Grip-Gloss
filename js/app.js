document.querySelectorAll('.slider').forEach(slider => {
  let images = slider.querySelectorAll('img');
  let current = 0;
  if(images.length>0){ images[0].classList.add('active'); }

  slider.querySelector('.next').addEventListener('click', () => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  });

  slider.querySelector('.prev').addEventListener('click', () => {
    images[current].classList.remove('active');
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add('active');
  });
});
