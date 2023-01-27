

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
  loop: false,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  a11y: true,
  paginationElement: 'button',


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
  }

});

swiper2.$el.on("keydown", (e) => {
  if (e.keyCode !== 13 && e.keyCode !== 32) return;

  var slideIndex = e.target.dataset.slideIndex;

  if (!slideIndex) return;

  galleryThumbs.slideTo(slideIndex);
  galleryTop.slideTo(slideIndex);
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

const swiper4 = new Swiper('.swiper-4', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 47,
  slidesPerView: 3,
  slidesPerGroup: 1,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  loop: false,

  navigation: {
    nextEl: ".swiper-btn-right",
    prevEl: ".swiper-btn-left",
  },
});
