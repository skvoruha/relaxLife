import {animate} from './helpers'

const menu = () =>{
  // само меню
  const menuBtn = document.querySelector('.menu__icon')
  const menu = document.querySelector('.popup-dialog-menu')
  const buttons = document.querySelectorAll('.popup-menu-nav__item')
  const popupRepairTypes = document.querySelector('.popup-repair-types')
  // функция открытия меню
  const openMneu = () =>{
    animate({
      duration: 200,
      timing(timeFraction) {
        return Math.pow(timeFraction, 3)
      },
      draw(progress) {
        progress = 1 - progress
        if (window.innerWidth > 576) {
          menu.style.transform = `translate3d(${progress}px, 0, 0)`
          // menu.style.transform = `translate3d(${progress}px, 0, 0);`
          //     transform: translate3d(645px, 0, 0);
        } else {
          menu.style.transform = `translate3d(0, ${progress}, 0)`
        }
        //transform: translate3d(0, 0vh, 0);
      }
    });
  }
  // функция закрытия меню
  const closeMenu = () =>{
    if (window.innerWidth > 574) {
      menu.style.transform = `translate3d(645px, 0, 0)`
    } else {
      menu.style.transform = `translate3d(0, -100vh, 0)`
    }
  }

  const openCloseList = (e) =>{
    e.preventDefault()
    popupRepairTypes.classList.toggle('visibility-visible')
    closeMenu()
  }


  buttons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault()
        // присваиванием href то есть ссылку к какому id перейти экрану
        let elmnt = document.querySelector(e.target.hash)
        // экран с настройками переходт к элементу по id
        elmnt.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
        if (window.innerWidth > 574) {
          menu.style.transform = `translate3d(645px, 0, 0)`
        } else {
          menu.style.transform = `translate3d(0, -100vh, 0)`
        }

    })
  })

  // просулшивание кнопки открытия меню
  menuBtn.addEventListener('click', openMneu)
  // кнопка закрытия меню
  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-menu')) {
      closeMenu()
    }
  })
  // отслеживаем нажатие по документу
  // close mobile-hide
  document.addEventListener('click',(e) => {
    if (e.target.closest('.menu-link.no-overflow') ||
       (e.target.closest('.link-list.link-list-repair.mobile-hide.tablet-hide')) ||
        e.target.closest('.close.mobile-hide')) {
        openCloseList(e)
    }
  })

}

export default menu