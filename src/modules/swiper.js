 // import Swiper JS
import Swiper, {Navigation,Pagination} from 'swiper';

Swiper.use([Navigation,Pagination]);
const  repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item ')

export const swiper = () =>{
  const repairTypesSlider = new Swiper('.repair-types-slider', {
    navigation: {
      nextEl: ".slider-arrow_right",
      prevEl: ".slider-arrow_left",
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

  if (window.innerWidth < 1024) {
    const  repairListRepair = document.querySelector('.nav-list-repair')
    repairListRepair.style.flexWrap = 'nowrap';
    repairListRepair.style.minWidth = 'fit-content';
    repairListRepair.style.justifyContent = 'space-evenly'
    // no-wrap
    // mmih -fit-content
    // repairTypesNavItem.classList = 'nav-list nav-list-repair'
    const navRepairTypesNav = new Swiper('.nav.repair-types-nav', {

    // конец свайпера для мобильной версии
      slideClass:'repair-types-nav__item',
      wrapperClass: 'nav-list-repair',
      navigation: {
        nextEl: ".nav-arrow.nav-arrow_right.desktop-hide",
        prevEl: ".nav-arrow.nav-arrow_left.desktop-hide",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }

      },
      pagination: {
          // el: ".swiper-pagination",
          type: "fraction",
      },

    })
  // конец условия if
  }

}
