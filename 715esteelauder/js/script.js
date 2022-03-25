let swiperbox1 = new Swiper(".lookbox1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  speed: 400,
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

let swiperbox2 = new Swiper(".lookbox2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  speed: 1200,
  autoplay: {
    delay: 2500,
  },
  loop: true,
});
