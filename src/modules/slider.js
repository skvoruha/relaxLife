import Swiper, {Navigation,Pagination} from 'swiper';
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const slider = () =>{
    // ФУНКЦИЯ КОТОРАЯ собирает ВСЕ классы с объекта если она получена по id и ставит точки между классами требуется
    const getClassFromId = (str) =>{
      return str.className.trim().replace(/\s/g, '.')
    }

    // НАЧАЛО свайпера FORMULA
    const formulaSliderWrap = document.querySelector('.formula-slider-wrap')
    const formulaSlider = formulaSliderWrap.querySelector('.formula-slider')
    const slides = formulaSliderWrap.querySelectorAll('.formula-item.formula-slider__slide')


    formulaSlider.style.cssText = `
      display:flex;
      min-width: 0;
    `
    // стрелки слайдера
    const arrowRightNav = document.getElementById('formula-arrow_right')
    const arrowLeftNav = document.getElementById('formula-arrow_left')


    const swiper =  new Swiper('.formula-slider-wrap', {
      navigation: {
        nextEl: `.${getClassFromId(arrowRightNav)}`,
        prevEl: `.${getClassFromId(arrowLeftNav)}`,
      },
      // количество слайдов для показа
      // slidesPerView: 3,
      // количество пролистываемых слайдов
      slidesPerGroup: 1,
      // активный слайд по центру
      centeredSlides: true,
      // бесконечный слайдер
      loop: true,
      // добавляем активый класс и класс активности свайпера
      slideActiveClass: `swiper-slide-active active-item`,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
           spaceBetween: 50
        },

        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }

    });
    // КОНЕЦ СВАЙПЕРА FORMULA



    // СЛАДЙЕР ПОРТФОЛИО
    const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap')
    const portfolioSlider = portfolioSliderWrap.querySelector('.portfolio-slider')
    portfolioSliderWrap.style.overflow = 'hidden'
    portfolioSlider.style.overflow = 'visible'
    // overflow: visible;
    const arrowRightPortfolio = document.getElementById('portfolio-arrow_right')
    const arrowLeftPortfolio = document.getElementById('portfolio-arrow_left')
    arrowRightPortfolio.style.right = '10px'
    arrowLeftPortfolio.style.left = '10px'

    // portfolio-slider-wrap
    const portfolioSwiperSliderWrap = new Swiper('.portfolio-slider-wrap', {
      navigation: {
        nextEl: `.slider-arrow_right-portfolio`,
        prevEl: `.slider-arrow_left-portfolio`,
      },
      slidesPerView: 3,
      simulateTouch: false,
      // slidesPerColumn: 3,
      // количество пролистываемых слайдов
      slidesPerGroup: 1,
      breakpoints:{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        900: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 0,
        },
         // when window width is >= 640px
        1024: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }
    });

    arrowRightPortfolio.addEventListener('click',()=>{
      const active = +portfolioSwiperSliderWrap.activeIndex
      let end
      if (window.innerWidth > 1024) {
        end = +portfolioSlider.children.length - 3
      } else if (window.innerWidth > 900 && window.innerWidth < 1024){
        end = +portfolioSlider.children.length - 2
      } else {
        end = +portfolioSlider.children.length - 1
      }


      if (active === end) {
        arrowRightPortfolio.style.display = 'none'
        arrowLeftPortfolio.style.display = 'flex'
      }
      if (active === 1) {
        arrowLeftPortfolio.style.display = 'flex'
      }

    })
    arrowLeftPortfolio.addEventListener('click',()=>{
      const active = +portfolioSwiperSliderWrap.activeIndex

      let end
      if (window.innerWidth > 1024) {
        end = +portfolioSlider.children.length - 3
      } else if (window.innerWidth > 900 && window.innerWidth < 1024){
        end = +portfolioSlider.children.length - 2
      } else {
        end = +portfolioSlider.children.length - 1
      }

      if (active === 0) {
        arrowRightPortfolio.style.display = 'flex'
        arrowLeftPortfolio.style.display = 'none'
      }
      if (active === end - 1) {
        arrowRightPortfolio.style.display = 'flex'
      }
    })


    const arrowLeft = document.getElementById('portfolio-arrow-mobile_left')
    const arrowRight = document.getElementById('portfolio-arrow-mobile_right')
    const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile')

    portfolioSliderMobile.style.overflow = 'visible'
    const portfolioMobileSwiperSliderWrap = new Swiper('.mobile-slider-portfolio-CUSTOM', {
      navigation: {
        nextEl:  `.${getClassFromId(arrowRight)}`,
        prevEl:  `.${getClassFromId(arrowLeft)}`,
      },
      slidesPerView: 1,
      // количество пролистываемых слайдов
      slidesPerGroup: 1,
      nested: true
    });
}

export default slider