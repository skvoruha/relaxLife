 // import Swiper JS
import Swiper, {Navigation,Pagination} from 'swiper';

Swiper.use([Navigation,Pagination]);
const  repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item ')
// кнопки слайдера
const arrowRightRepair = document.getElementById('repair-types-arrow_right')
const arrowLeftRepair = document.getElementById('repair-types-arrow_left')
// стрелки навигации при экране меньше 576 px
const arrowRightNav = document.getElementById('nav-arrow-repair-right_base')
const arrowLeftNav = document.getElementById('nav-arrow-repair-left_base')


const getClassFromId = (str) =>{
 return str.className.trim().replace(/\s/g, '.')
}

export const swiper = () =>{
  const repairTypesSlider = new Swiper('.repair-types-slider', {
    navigation: {
      nextEl: `.${getClassFromId(arrowRightRepair)}`,
      prevEl: `.${getClassFromId(arrowLeftRepair)}`,
    },
    pagination: {
      el: '.nav-list.nav-list-repair',
      clickable: true,
      bulletActiveClass: 'active',
      bulletClass:'button_o repair-types-nav__item',
      renderBullet: function (index) {

        return`
            <button type="button" class="button_o repair-types-nav__item repair-types-nav__item-${index + 1}">
              ${repairTypesNavItem[index].children[0].outerHTML}
              ${repairTypesNavItem[index].textContent}</button>
          `;

      },
    },
  });

  if (window.innerWidth < 768) {
    // nav-arrow-repair-right_base

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
  }

}
