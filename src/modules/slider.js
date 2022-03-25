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

    // НАЧАЛО свайпера  REPAIR
    // слайдер
    const repairTypesSlider = document.querySelector('.repair-types-slider')
    // получаем элемент с кнопками
    const navListRepair = document.querySelector('.nav-list-repair')
    // получаем счётчик слайдеров
    const repairCounter = document.getElementById('repair-counter')
    repairCounter.style.zIndex = '1'
    // по клику убираем активный класс у элемента и добавляем нажатому элементу

    const arrowRightRepair = document.getElementById('repair-types-arrow_right')
    const arrowLeftRepair = document.getElementById('repair-types-arrow_left')

    const repairTypesSwiperSlider = new Swiper('.repair-types-slider', {
      init: false,
      navigation: {
        nextEl: `.${getClassFromId(arrowRightRepair)}`,
        prevEl: `.${getClassFromId(arrowLeftRepair)}`,
      },
      // thisSwiper.swiper.update();
      observer: true,
      observeParents:true,
      observeSlideChildren:true,

      // количество пролистываемых слайдов
      slidesPerGroup: 1,
      // активный слайд по центру
      centeredSlides: true,
      centerInsufficientSlides: true,
    });


    for (let i = 1; i < repairTypesSlider.children.length; i++) {
      repairTypesSlider.children[i].style.display = 'none'
    }

    navListRepair.addEventListener('click',(e)=>{
      if (e.target.closest('.repair-types-nav__item')) {
        // ,записываем номер элмента
        let classNum = e.target.classList[2]
        classNum = classNum.replace(/[^0-9]/g,"") - 1
        // получаем елмент с активным класслм
        const prevActive = navListRepair.querySelector('.active')
        prevActive.classList.remove('active')
        const nextActive = e.target.closest('.repair-types-nav__item')
        nextActive.classList.add('active')
        // кнопки слайдера

        const prevSlider = repairTypesSlider.querySelector('.swiper-wrapper')
        for (let i = 0; i < prevSlider.children.length - 1; i++) {
          prevSlider.children[i].classList.remove('swiper-slide')
        }
        prevSlider.style.display = 'none'
        prevSlider.classList.remove('swiper-wrapper')

        const nextSlider = repairTypesSlider.children[classNum]
        nextSlider.style.display = 'flex'
        nextSlider.classList.add('swiper-wrapper')
        for (let i = 0; i < nextSlider.children.length; i++) {
          nextSlider.children[i].classList.add('swiper-slide')
        }
      }
    })

    // repairTypesSwiperSlider.init()

    // КОНЕЦ СВАЙПЕРА REPAIR

}

export default slider