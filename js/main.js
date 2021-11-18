const swiper = new Swiper(".hotel__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel__swiper-button--next",
    prevEl: ".hotel__swiper-button--prev",
  },
  effect: "slide",
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  effect: "slide",
});
