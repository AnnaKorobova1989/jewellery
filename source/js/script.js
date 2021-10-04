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
});

//Slider

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



const accordions = document.querySelectorAll('.accordion-item');

  for (let item of accordions) {
    item.addEventListener('click', function() {
      this.classList.toggle('active')
    })
  }


  'use strict';

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
