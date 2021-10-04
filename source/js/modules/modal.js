'use strict';

(function () {
  const body = document.querySelector('body');
  const loginLink = document.querySelector('.header__user-item--login');
  const loginModal = document.querySelector('.login-modal');
  const loginOverlay = document.querySelector('.login-modal__overlay');
  // const loginWindow = document.querySelector('.login-modal__window');
  const loginClose = document.querySelector('.login-modal__close');
  const loginEmail = document.querySelector('#modal-email');
  const catalog = document.querySelector('.catalog');
  const filter = document.querySelector('.filter');
  const filterOpenButton = document.querySelector('.catalog__filter-button');
  const filterCloseButton = document.querySelector('.filter__close');
  const addButton = document.querySelector('.profile__add');
  const cartModal = document.querySelector('.cart-modal');
  const cartOverlay = document.querySelector('.cart-modal__overlay');
  const cartPlus = document.querySelector('.cart-modal__control--plus');
  const cartClose = document.querySelector('.cart-modal__close');
  const cartCount = document.querySelector('.cart-count');
  let count = 0;
  let isStorageSupport = true;
  let storageEmail = '';

  try {
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  const removeNoJs = function (overlay) {
    overlay.classList.remove('modal__no-js');
  }

  const openModalWindow = function (overlay) {
    overlay.classList.add('modal-show');
    body.classList.add('fixed');
    body.style.width = '100%';
  }

  const addModalShade = function (modal) {
    modal.classList.add('shade');
  }

  const closeModalWindow = function (overlay) {
    if (overlay.classList.contains('modal-show')) {
      overlay.classList.remove('modal-show');
      body.classList.remove('fixed');
    }
  }

  const removeModalShade = function (modal) {
    modal.classList.remove('shade');
  }

  removeNoJs(loginOverlay);

  loginLink.addEventListener('click', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    openModalWindow(loginOverlay);
    addModalShade(loginModal);
    loginEmail.focus();
  });

  loginClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModalWindow(loginOverlay);
    removeModalShade(loginModal);
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closeModalWindow(loginOverlay);
      removeModalShade(loginModal);
    }
  });

  loginOverlay.addEventListener('click', function (evt) {
    if (evt.target.closest('.modal__window')) {
      evt.stopPropagation();
    } else {
      closeModalWindow(loginOverlay);
      removeModalShade(loginModal);
    }
  });

  if (window.location.href.endsWith('product.html')) {
    removeNoJs(cartOverlay);

    addButton.addEventListener('click', function (evt) {
      evt.stopPropagation();
      evt.preventDefault();
      openModalWindow(cartOverlay);
      addModalShade(cartModal);
      cartPlus.focus();
      count = count + 1
      cartCount.innerHTML = count;
    });

    cartClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModalWindow(cartOverlay);
      removeModalShade(cartModal);
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        closeModalWindow(cartOverlay);
        removeModalShade(cartModal);
      }
    });

    cartOverlay.addEventListener('click', function (evt) {
      if (evt.target.closest('.modal__window')) {
        evt.stopPropagation();
      } else {
        closeModalWindow(cartOverlay);
        removeModalShade(cartModal);
      }
    });
  }

  if (window.location.href.endsWith('catalog.html')) {
    removeNoJs(catalog);

    filterOpenButton.addEventListener('click', function () {
      openModalWindow(filter);
    });

    filterCloseButton.addEventListener('click', function () {
      closeModalWindow(filter);
    });
  }
})();
