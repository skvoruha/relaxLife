import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const typesRepairs  = ()=>{

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
      navigation: {
        nextEl: `.${getClassFromId(arrowRightRepair)}`,
        prevEl: `.${getClassFromId(arrowLeftRepair)}`,
      },
      observer: true,
      observeParents:true,
      observeSlideChildren:true,

      // количество пролистываемых слайдов
      // slidesPerGroup: 1,
      // // активный слайд по центру
      // centeredSlides: true,
      // centerInsufficientSlides: true,
      // setWrapperSize: true,
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
          prevSlider.children[i].style.display = 'none'
        }
        prevSlider.style.display = 'none'
        prevSlider.classList.remove('swiper-wrapper')

        const nextSlider = repairTypesSlider.children[classNum]
        nextSlider.style.display = 'flex'
        nextSlider.classList.add('swiper-wrapper')
        for (let i = 0; i < nextSlider.children.length; i++) {
          nextSlider.children[i].classList.add('swiper-slide')
          nextSlider.children[i].style.display = 'block'
        }
      }
    })

    // repairTypesSwiperSlider.init()

    // КОНЕЦ СВАЙПЕРА REPAIR
}

export default typesRepairs