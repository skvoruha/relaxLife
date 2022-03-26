import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const typesRepairs  = ()=>{


    // НАЧАЛО свайпера  REPAIR
    const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item ')
    // Блок над слайдераами>
    const repairTypes = document.getElementById('repair-types')
    const repairTypesSliders = repairTypes.querySelector('.row_reverse')
    const sliders = repairTypesSliders.children
    // получаем элемент с кнопками
    const navListRepair = document.querySelector('.nav-list-repair')
    // получаем счётчик слайдеров
    // по клику убираем активный класс у элемента и добавляем нажатому элементу
    // Мобильная версия ТАБОВ / Полуаем списко табок
    const repairTypesNav = document.querySelector('.repair-types-nav')

    const arrowRightRepair = document.getElementById('repair-types-arrow_right')
    const arrowLeftRepair = document.getElementById('repair-types-arrow_left')


    for (let i = 0; i < sliders.length - 1; i++) {

      sliders[i].classList.add('dn')
      const repairCounter = document.getElementById(`repair-counter-${i + 1}`)
      if (repairCounter) {
        repairCounter.style.zIndex = '1'
      }
      // убираем все слайдеры со страницы
      // инициализируем слайдеры
      // +1 потому что слайдеры с инедса 1 начинаются
      const repairTypesSwiperSlider = new Swiper(`.repair-types-slider-${i + 1}`, {
        navigation: {
          nextEl: `.${getClassFromId(arrowRightRepair)}`,
          prevEl: `.${getClassFromId(arrowLeftRepair)}`,
        },
        // количество пролистываемых слайдов
        pagination:{
        el:`.repair-counter-${i + 1}`,
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
      });
    }
    // включаем первый сладер по умолчанию
    sliders[0].classList.remove('dn')
    sliders[0].classList.add('db')
    // включаем послежний слайдер по умолчанию
    sliders[sliders.length - 1].classList.remove('dn')
    sliders[sliders.length - 1].classList.add('db')
    // КОНЕЦ СОЗДАНИЯ СВАЙПЕЕРОВ

    const deActiveTabs = () =>{
      const prevActive = navListRepair.querySelector('.active')
      prevActive.classList.remove('active')
    }
    const activeTabs = (e) =>{
      const nextActive = e.target.closest('.repair-types-nav__item')
      nextActive.classList.add('active')
    }

    const openSlider = (index) =>{
      sliders[index].classList.remove('dn')
      sliders[index].classList.add('db')
    }

    const closeSlider = () =>{
      // кнопки слайдера
      const prevSliders = repairTypesSliders.querySelector('.db')
      prevSliders.classList.remove('db')
      prevSliders.classList.add('dn')
    }

    navListRepair.addEventListener('click',(e)=>{
      if (e.target.closest('.repair-types-nav__item')) {
        let classNum = e.target.classList[2]
        classNum = classNum.replace(/[^0-9]/g,"") - 1
        // получаем елмент с активным класслм
        // закрываем актинвый таб
        deActiveTabs()
        // делаем активным таб
        activeTabs(e)
        // ЗАКРЫВАЕМ ТЕКУЩИЙ откКРЫТЙ СЛАЙДЕР
        closeSlider()
        // ОТКРЫВАЕМ СЛАЙДЕР ПО КОТОРОМУ НАЖАЛИ
        openSlider(classNum)
        // sliders[classNum].classList.remove('dn')
        // sliders[classNum].classList.add('db')
        //  sliders[classNum].classList.remove('dn')
      }
    })

    // прослушиваем события по нажатию стрелок
    repairTypesNav.addEventListener('click',() =>{
    })
    const repairArrowLeft = document.getElementById('nav-arrow-repair-left_base')
    const repairArrowRight = document.getElementById('nav-arrow-repair-right_base')




    // nav-arrow-repair-right_base
      const arrowRightNav = document.getElementById('nav-arrow-repair-right_base')
      const arrowLeftNav = document.getElementById('nav-arrow-repair-left_base')

      const  repairListRepair = document.querySelector('.nav-list-repair')
      const svgAll = repairListRepair.querySelectorAll('svg')
      // ЧТОБЫ УБРАТЬ ГЛЮ С СЛАДЕРОМ ЕСЛИ display flex  - min-wight 0
      svgAll.forEach(e => {
        e.style.left = '30%'
      });
      if (window.innerWidth < 576) {
        svgAll.forEach(e => {
          e.style.left = '13%'
        });
      }
      if (window.innerWidth > 786 && window.innerWidth < 986) {
        svgAll.forEach(e => {
          e.style.left = '34%'
        });
      }
      if (window.innerWidth > 1024) {
        svgAll.forEach(e => {
          e.style.left = '30%'
        });
      }
      repairListRepair.style.flexWrap = 'nowrap';
      repairListRepair.style.minWidth = 'fit-content';
      repairListRepair.style.justifyContent = 'space-evenly'

      const navRepairTypesNav = new Swiper('.nav.repair-types-nav', {

        slideClass:'repair-types-nav__item',
        wrapperClass: 'nav-list-repair',
        navigation: {
        nextEl: `.${getClassFromId(arrowRightNav)}`,
          prevEl: `.${getClassFromId(arrowLeftNav)}`,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          }
        },
        pagination: {
            type: "fraction",
        },
      })
      if (window.innerWidth < 480) {
        // console.log(arrowRightNav);
        // console.log(repairArrowRight);
        // console.log(navRepairTypesNav.navigation.nextEl);
        // repairArrowLeft.style.display = 'block'
        // repairArrowRight.style.display = 'block'
      }


    // const repairTypesSwiperSlider = new Swiper(`.nav.repair-types-nav`, {
    //     init: false,
    //     navigation: {
    //       nextEl: `.${getClassFromId(repairArrowRight)}`,
    //       prevEl: `.${getClassFromId(repairArrowLeft)}`,
    //     },
    //     slidesPerView: 3,
    //       // количество пролистываемых слайдов
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //           slidesPerView: 1,
    //           spaceBetween: 0
    //         },
    //         // when window width is >= 480px
    //         768: {
    //           slidesPerView: 3,
    //           spaceBetween: 30
    //         },
    //       }
    // });

    setInterval(()=>{
      const widthScreen = window.innerWidth

      if (window.innerWidth > 900 && window.innerWidth < 1024) {
        navRepairTypesNav.init()
        navRepairTypesNav.enable()
        svgAll.forEach(e => {
          e.style.left = '30%'
        });
      } else  if (window.innerWidth > 786 && window.innerWidth < 986) {
        svgAll.forEach(e => {
          e.style.left = '34%'
        })}
        else  if (window.innerWidth < 786 && window.innerWidth > 568) {
        svgAll.forEach(e => {
          e.style.left = '27%'
        })}
      else {
      //  repairTypesSwiperSlider.destroy()
      svgAll.forEach(e => {
        e.style.left = '14%'
      });
      // navRepairTypesNav.disable()
      }
    },400)
}

export default typesRepairs