import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const reviews = () =>{
  const reviews = document.getElementById('reviews')

  const reviewsSliderWrap = reviews.querySelector('.reviews-slider-wrap')
  // reviewsSliderWrap.classList.add('open-popup-swiper')
  // open-popup-swiper
  // reviews-slider-wrap
  const reviewsArrowLeft = document.getElementById('reviews-arrow_left')
  const reviewsArrowRight = document.getElementById('reviews-arrow_right')

  const reviewsSwiperSliderWrap = new Swiper(`.reviews-swiper-custom`, {
    navigation: {
      nextEl:  `.${getClassFromId(reviewsArrowRight)}`,
      prevEl:  `.${getClassFromId(reviewsArrowLeft)}`,
    },
    slidesPerView: 1,
    // количество пролистываемых слайдов
    slidesPerGroup: 1,
    nested: true,
  });

}

export default reviews