const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  speed: 8000,
  autoplay : {
    enabled: true,
    delay: 0
  }
});

const swiper2 = new Swiper('.swiperTest', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
});
