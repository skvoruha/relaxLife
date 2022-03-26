import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'

const transparency = () => {
  if (window.innerWidth > 1024) {
    return
  }


  const arrowLeft = document.getElementById('transparency-arrow_left')
  const arrowRight = document.getElementById('transparency-arrow_right')

  const popupArrowLeft = document.getElementById('transparency_left')
  const popupArrowRight = document.getElementById('transparency_right')
  // олучаем сам элемент со слайдером
  const elemTransparencySliderWrap = document.querySelector('.popup-transparency-slider-wrap')

  const transparency = document.getElementById('transparency')
  const popupTransparency = document.querySelector('.popup-transparency')

  const transparencyPopupCounter = document.getElementById('transparency-popup-counter')

  const TransparencySliderWrap = new Swiper(`.transparency-slider-wrap`, {
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

  const popupTransparencySliderWrap = new Swiper('.popup-transparency-slider-wrap',{
    navigation: {
      nextEl:  `.${getClassFromId(popupArrowRight)}`,
      prevEl:  `.${getClassFromId(popupArrowLeft)}`,
    },
    slidesPerView: 1,
    // количество пролистываемых слайдов
    slidesPerGroup: 1,
    simulateTouch: false,
    nested: true,
    pagination:{
      // transparencyPopupCounter
      el:`.${getClassFromId(transparencyPopupCounter)}`,
      type:'fraction',
      renderFraction: function(currentClass, totalClass){
        return `
          <div class="slider-counter-content">
            <div class="slider-counter-content__current ${currentClass}"></div>
            <div class="slider-counter-content__total ${totalClass}"></div>
          </div>
        `
      }
    }


  })

  transparency.addEventListener('click', (e)=>{
    if (e.target.closest('.transparency-item__img')) {
      popupTransparency.classList.add('visibility-visible')
      elemTransparencySliderWrap.classList.add('open-popup-swiper')

      transparencyPopupCounter.classList.add('zIndex')
    }
  })

  popupTransparency.addEventListener('click',(e)=>{
    if (e.target.closest('.close.mobile-hide') ||
       (popupTransparency.classList.contains('visibility-visible') &&
       (!e.target.closest('.popup-transparency-slider-wrap')))) {

      popupTransparency.classList.remove('visibility-visible')
      elemTransparencySliderWrap.classList.remove('open-popup-swiper')
    }
  })
  // id счетчика transparency-popup-counter


}

// если ширина экарна меньше 1090 включаем свайпер
// переменная ширину экарана
// setInterval(()=>{

// }, 200);
// УЛЮЧЕНИЕ И ОТКЛЮЧЕНИЕ СЛАЙДЕРА
// popupTransparencySliderWrap.enable()
// popupTransparencySliderWrap.disable()
export default transparency