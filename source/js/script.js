'use strict';

(function () {
  if (document.querySelectorAll('.accordion,' +
  '.accordion__button')) {
    const accordion = document.querySelectorAll('.accordion');
    const accordionButton = document.querySelectorAll('.accordion__button');

    accordion.forEach(function (acc) {
      acc.classList.remove('accordion-no-js');
    })

    function hideAll() {
      accordionButton.forEach(function (acc) {
        acc.classList.remove('active-item');
        acc.nextElementSibling.classList.remove('show');
      });
    }

    accordionButton.forEach(function (acc) {
      acc.addEventListener('click', function () {
        if (acc != this) {
          hideAll();
        }
        this.classList.toggle('active-item');
        this.nextElementSibling.classList.toggle('show');
      })
    });
  }
})();


(function () {
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
        return current + '&nbsp; of &nbsp;' + (total);
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

  window.addEventListener('resize', function () {
    swiper.pagination.update();
  });
})();

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


(function () {
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

(function () {
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
      const min = parseInt(_this.min);
      const max = parseInt(_this.max);

      _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

      const percent = ((_this.value - min) / (max - min)) * 100;

      thumbLeft.style.left = percent + '%';
      range.style.left = percent + '%';
      bubbleLeft.style.left = percent + '%';
    }

    setLeftValue();

    const setRightValue = function () {
      const _this = inputRight;
      const min = parseInt(_this.min);
      const max = parseInt(_this.max);

      _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) * 1);

      const percent = ((_this.value - min) / (max - min)) * 100;

      thumbRight.style.right = (100 - percent) + '%';
      range.style.right = (100 - percent) + '%';
      bubbleRight.style.right = (100 - percent) + '%';
    }

    setRightValue();

    function setBubble(range, bubble) {
      const val = range.value;
      bubble.innerHTML = '&#36;' + val;
    }

    setBubble(inputLeft, bubbleLeft);
    setBubble(inputRight, bubbleRight);

    inputLeft.addEventListener('input', function () {
      setLeftValue();
      setBubble(inputLeft, bubbleLeft);
    });
    inputRight.addEventListener('input', function () {
      setRightValue();
      setBubble(inputRight, bubbleRight);
    });
  }
})();
