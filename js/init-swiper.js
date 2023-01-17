

const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  allowTouchMove: false,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: ".swiper-nav-btn-right",
    prevEl: ".swiper-nav-btn-left",
  },


  // Setting minimum and maximum zoom ration
  zoom: {
    maxRatio: 1.5,
    minRation: 1,
    // toggle: false,
  },

});

