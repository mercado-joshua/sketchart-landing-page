"use strict";

var swiperSlideList = function swiperSlideList() {
  var swiper = new Swiper('[data-js-slider-list]', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
};

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') swiperSlideList();
});