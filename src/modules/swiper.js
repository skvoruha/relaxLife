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
  });

}
