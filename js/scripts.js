$(function () {
  $('.menu-toggle, .fa-times').on('click', function () {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
  });

  $('.overlay').on('click', function () {
    $('nav').removeClass('active');
    $(this).removeClass('menu-open');
  });
});


const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//ButtonListeners
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});