'use strict';

(function () {
  const body = document.body;
  const headerMain = document.querySelector('.header');
  const navToggleButton = document.querySelector('.header__button--burger');

  headerMain.classList.remove('header-no-js');

  navToggleButton.addEventListener('click', function () {
    if (headerMain.classList.contains('header-closed')) {
      headerMain.classList.remove('header-closed');
      headerMain.classList.add('header-opened');
      body.classList.add('fixed');
      body.style.width = '100%';
    } else {
      headerMain.classList.remove('header-opened');
      headerMain.classList.add('header-closed');
      body.classList.remove('fixed');
    }
  });
})();
