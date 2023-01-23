

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
  a11y: true,


  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: ".swiper-nav-btn-right",
    prevEl: ".swiper-nav-btn-left",
  },

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },


  // Setting minimum and maximum zoom ration
  zoom: {
    maxRatio: 1.5,
    minRation: 1,
    // toggle: false,
  },

});

const swiper3 = new Swiper('.swiper-3', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 1,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,


  navigation: {
    nextEl: ".swiper-nav-btn-right",
    prevEl: ".swiper-nav-btn-left",
  },
});
