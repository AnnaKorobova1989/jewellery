'use strict';
//Menu
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__button--burger');

header.classList.remove('header--no-js');

headerBurger.addEventListener('click', function () {
  if (header.classList.contains('header__closed')) {
    header.classList.remove('header__closed');
    header.classList.add('header__opened');
  } else {
    header.classList.remove('header__opened');
    header.classList.add('header__closed');
  }
})

//Slider

const swiper = new Swiper('.swiper', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  slideToClickedSlide: true,
  slidesPerView: 4,
});



