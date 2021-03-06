/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
'use strict';

(function () {
  if (document.querySelectorAll('.accordion,' +
  '.accordion__button')) {
    const accordion = document.querySelectorAll('.accordion');
    const accordionButton = document.querySelectorAll('.accordion__button');

    accordion.forEach ((acc) => {
      acc.classList.remove('accordion-no-js');
    });

    // eslint-disable-next-line no-inner-declarations
    function hideAll() {
      accordionButton.forEach((acc) => {
        acc.classList.remove('active-item');
        acc.nextElementSibling.classList.remove('show');
      });
    }

    accordionButton.forEach((acc) => {
      acc.addEventListener('click', function () {
        if (acc !== this) {
          hideAll();
        }
        this.classList.toggle('active-item');
        this.nextElementSibling.classList.toggle('show');
      });
    });
  }
})();


(function () {
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `${current} + '&nbsp; of &nbsp;' + (total)`;
      }
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        pagination: {
          type: 'bullets',
          renderBullet: function (index, className) {
            // eslint-disable-next-line prefer-template
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets',
          renderBullet: function (index, className) {
            // eslint-disable-next-line prefer-template
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  window.addEventListener('resize', () => {
    swiper.pagination.update();
  });
})();

(function () {
  if (document.querySelectorAll('.header,' +
  '.header__button--burger')) {
    const body = document.body;
    const headerMain = document.querySelector('.header');
    const navToggleButton = document.querySelector('.header__button--burger');

    headerMain.classList.remove('header-no-js');

    navToggleButton.addEventListener('click', () => {
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
  }
})();


(function () {
  if (document.querySelectorAll('body,' +
    '.header__user-item--login,' +
    '.login-modal,' +
    '.login-modal__overlay,' +
    '.login-modal__close,' +
    '#modal-email,' +
    '.catalog,' +
    '.filter,' +
    '.catalog__filter-button,' +
    '.filter__close,' +
    '.cart-count')) {
    const body = document.querySelector('body');
    const loginLink = document.querySelector('.header__user-item--login');
    const loginModal = document.querySelector('.login-modal');
    const loginOverlay = document.querySelector('.login-modal__overlay');
    const loginClose = document.querySelector('.login-modal__close');
    const loginEmail = document.querySelector('#modal-email');
    const catalog = document.querySelector('.catalog');
    const filter = document.querySelector('.filter');
    const filterOpenButton = document.querySelector('.catalog__filter-button');
    const filterCloseButton = document.querySelector('.filter__close');
    // eslint-disable-next-line no-unused-vars
    let isStorageSupport = true;
    // eslint-disable-next-line no-unused-vars
    let storageEmail = '';

    try {
      storageEmail = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }

    const removeNoJs = function (overlay) {
      overlay.classList.remove('modal-no-js');
    };

    const openModalWindow = function (overlay) {
      overlay.classList.add('modal-show');
      body.classList.add('fixed');
      body.style.width = '100%';
      // eslint-disable-next-line no-use-before-define
      body.addEventListener('keydown', keyPressHandler);
    };

    const addModalShade = function (modal) {
      modal.classList.add('shade');
    };

    const closeModalWindow = function (overlay) {
      if (overlay.classList.contains('modal-show')) {
        overlay.classList.remove('modal-show');
        body.classList.remove('fixed');
        // eslint-disable-next-line no-use-before-define
        body.removeEventListener('keydown', keyPressHandler);
      }
    };

    const keyPressHandler = function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();

        closeModalWindow(filter);
      }
    };

    const removeModalShade = function (modal) {
      modal.classList.remove('shade');
    };

    removeNoJs(loginOverlay);

    loginLink.addEventListener('click', (evt) => {
      evt.stopPropagation();
      evt.preventDefault();
      openModalWindow(loginOverlay);
      addModalShade(loginModal);
      loginEmail.focus();
    });

    loginClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeModalWindow(loginOverlay);
      removeModalShade(loginModal);
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        closeModalWindow(loginOverlay);
        removeModalShade(loginModal);
      }
    });

    loginOverlay.addEventListener('click', (evt) => {
      if (evt.target.closest('.modal__window')) {
        evt.stopPropagation();
      } else {
        closeModalWindow(loginOverlay);
        removeModalShade(loginModal);
      }
    });

    if (window.location.href.endsWith('catalog.html')) {
      removeNoJs(catalog);

      filterOpenButton.addEventListener('click', () => {
        openModalWindow(filter);
      });

      filterCloseButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        closeModalWindow(filter);
      });
    }
  }
})();

(function () {
  if (document.querySelectorAll('#left-range,' +
  '#right-range,' +
  '.filter__price-thumb--left,' +
  '.filter__price-thumb--right,' +
  '.filter__price-range,' +
  '.filter__price-number--left,' +
  '.filter__price-number--right')) {
    const inputLeft = document.querySelector('#left-range');
    const inputRight = document.querySelector('#right-range');
    const thumbLeft = document.querySelector('.filter__price-thumb--left');
    const thumbRight = document.querySelector('.filter__price-thumb--right');
    const range = document.querySelector('.filter__price-range');
    const bubbleLeft = document.querySelector('.filter__price-number--left');
    const bubbleRight = document.querySelector('.filter__price-number--right');

    if (window.location.href.endsWith('catalog.html')) {
      const setLeftValue = function () {
        const _this = inputLeft;
        const min = parseInt(_this.min, 10);
        const max = parseInt(_this.max, 10);

        _this.value = Math.min(parseInt(_this.value, 10), parseInt(inputRight.value, 10) - 1);

        const percent = ((_this.value - min) / (max - min)) * 100;

        thumbLeft.style.left = `${percent}%`;
        range.style.left = `${percent}%`;
        bubbleLeft.style.left = `${percent}%`;
      };

      setLeftValue();

      const setRightValue = function () {
        const _this = inputRight;
        const min = parseInt(_this.min, 10);
        const max = parseInt(_this.max, 10);

        _this.value = Math.max(parseInt(_this.value, 10), parseInt(inputLeft.value, 10) * 1);

        const percent = ((_this.value - min) / (max - min)) * 100;

        thumbRight.style.right = `(100 - ${percent}) + '%'`;
        range.style.right = `(100 - ${percent}) + %`;
        bubbleRight.style.right = `(100 - ${percent}) + %`;
      };

      setRightValue();

      // eslint-disable-next-line no-inner-declarations
      function setBubble(range, bubble) {
        const val = range.value;
        bubble.innerHTML = `&#36;${  val}`;
      }

      setBubble(inputLeft, bubbleLeft);
      setBubble(inputRight, bubbleRight);

      inputLeft.addEventListener('input', () => {
        setLeftValue();
        setBubble(inputLeft, bubbleLeft);
      });
      inputRight.addEventListener('input', () => {
        setRightValue();
        setBubble(inputRight, bubbleRight);
      });
    }
  }
})();
