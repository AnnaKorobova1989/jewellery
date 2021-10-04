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
