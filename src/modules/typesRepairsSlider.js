import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const typesRepairs  = ()=>{

  // НАЧАЛО свайпера  REPAIR
    // Блок над слайдераами>
    const repairTypes = document.getElementById('repair-types')
    const repairTypesSliders = repairTypes.querySelector('.row_reverse')
    const sliders = repairTypesSliders.children
    // получаем элемент с кнопками
    const navListRepair = document.querySelector('.nav-list-repair')
    // получаем счётчик слайдеров
    // const repairCounter = document.getElementById('repair-counter')
    // repairCounter.style.zIndex = '1'
    // по клику убираем активный класс у элемента и добавляем нажатому элементу

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
      console.log(getClassFromId(repairCounter));
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
    sliders[0].classList.remove('dn')
    sliders[0].classList.add('df')
    sliders[sliders.length - 1].classList.remove('dn')
    sliders[sliders.length - 1].classList.add('db')



    navListRepair.addEventListener('click',(e)=>{
      if (e.target.closest('.repair-types-nav__item')) {
        let classNum = e.target.classList[2]
        classNum = classNum.replace(/[^0-9]/g,"") - 1
        // получаем елмент с активным класслм
        const prevActive = navListRepair.querySelector('.active')
        prevActive.classList.remove('active')
        const nextActive = e.target.closest('.repair-types-nav__item')
        nextActive.classList.add('active')
        // кнопки слайдера
        const prevSliders = repairTypesSliders.querySelector('.df')
        prevSliders.classList.remove('df')
        prevSliders.classList.add('dn')

        sliders[classNum].classList.remove('dn')
        sliders[classNum].classList.add('df')
        //  sliders[classNum].classList.remove('dn')

      }
    })
}

export default typesRepairs