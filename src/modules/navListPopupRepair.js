
import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const navListPopupRepair = () =>{



    const navListPopup = document.querySelector('.nav-popup-repair-types')
    const navListSelect = navListPopup.querySelector('.nav-list-popup-repair')

    const arrowLeft = document.getElementById('nav-arrow-popup-repair_left')
    const arrowRight = document.getElementById('nav-arrow-popup-repair_right')

    if (window.innerWidth < 1024) {
      navListSelect.style.cssText = `
      min-width: 0px;
      flex-wrap: nowrap;
      display:flex;
      justify-content: normal;
      flex-direction: row;
      `
      const swiper = new Swiper('.nav-popup-repair-types', {
      simulateTouch: false,
      slidesPerView:2,
      spaceBetween: 20,
      navigation: {
        nextEl:  `.${getClassFromId(arrowRight)}`,
        prevEl:  `.${getClassFromId(arrowLeft)}`,
      },
      nested: false,

      breakpoints:{
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 640px
          786: {
            slidesPerView: 2,
            spaceBetween: 20
          }
      },
    });

    }
  // setInterval(()=>{
  //    if (window.innerWidth < 1024) {
  //     swiper.enable()
  //   } else {
  //     swiper.disable()
  //   }
  // }, 100)
}
// getClassFromId
export default navListPopupRepair
// nav-list-popup-repair 1024