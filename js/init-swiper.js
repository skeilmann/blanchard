

const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 10000,
  },
  speed: 10000,
  effect: 'fade',
  preventInteractionOnTransition: 'true',
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,


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

  breakpoints: {
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },
    800: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
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
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  slidesPerGroup: 1,


  navigation: {
    nextEl: ".swiper-nav-btn-right",
    prevEl: ".swiper-nav-btn-left",
  },

  pagination: {
    el: '.swiper-3-pagination',
    type: 'bullets',
  },

  breakpoints: {
    650: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 28,
      slidesPerGroup: 3,
    },

    1300: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});

const swiper4 = new Swiper('.swiper-4', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 34,
  slidesPerView: 1,
  slidesPerGroup: 1,
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  loop: false,

  navigation: {
    nextEl: ".swiper-btn-right",
    prevEl: ".swiper-btn-left",
  },

  breakpoints: {

    700: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    900: {
      spaceBetween: 47,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 47,
    },
  }
});
