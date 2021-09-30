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
