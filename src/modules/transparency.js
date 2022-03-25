import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'

const transparency = () => {


  const arrowLeft = document.getElementById('transparency-arrow_left')
  const arrowRight = document.getElementById('transparency-arrow_right')
  // олучаем сам элемент со слайдером
  const transparencySlider = document.querySelector('.transparency-slider')

  const popupTransparencySliderWrap = new Swiper(`.transparency-slider-wrap`, {
    navigation: {
      nextEl:  `.${getClassFromId(arrowRight)}`,
      prevEl:  `.${getClassFromId(arrowLeft)}`,
    },
    slidesPerView: 1,
    // количество пролистываемых слайдов
    slidesPerGroup: 1,
    simulateTouch: false,
    nested: true,
  });

  // если ширина экарна меньше 1090 включаем свайпер
  // переменная ширину экарана
  setInterval(()=>{

  }, 200);

}
  // УЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ СЛАЙДЕРА
    // popupTransparencySliderWrap.enable()
    // popupTransparencySliderWrap.disable()

export default transparency