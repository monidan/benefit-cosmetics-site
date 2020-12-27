import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const bannerSwiper = new Swiper('.main__banner_wrapper', {
  direction: 'horizontal',
  loop: true,
  speed: 600,

  navigation: {
    prevEl: '.banner__slider_left',
    nextEl: '.banner__slider_right'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})