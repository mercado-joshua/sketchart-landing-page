const swiperSlideList = () => {
    const swiper = new Swiper('[data-js-slider-list]', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
    });
};

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') swiperSlideList();
});