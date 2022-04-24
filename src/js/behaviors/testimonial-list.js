const swiperTestimonial = () => {
    const swiper = new Swiper('[data-js-testimonial-list]', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          640: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }
    });
};

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') swiperTestimonial();
});