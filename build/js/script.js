'use strict';

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
