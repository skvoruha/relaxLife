const menu = () =>{
  // само меню
  const menuBtn = document.querySelector('.menu__icon')
  const menu = document.querySelector('.popup-dialog-menu')

  const buttons = document.querySelectorAll('.popup-menu-nav__item')
  const popupRepairTypes = document.querySelector('.popup-repair-types')
  const buttonFooter = document.querySelector('.button-footer')
  // функция открытия меню
  const openMenu = () =>{
    if (window.innerWidth > 576) {
      menu.classList.add('showMenu')
    }
    menu.classList.add('showHide-menu')
  }
  // функция закрытия меню
  const closeMenu = () =>{
    menu.classList.remove('showMenu')
    menu.classList.remove('showHide-menu')
  }

  const openCloseList = (e) =>{
    e.preventDefault()
    document.body.style.overflow = ''
    popupRepairTypes.classList.toggle('visibility-visible')

    if (popupRepairTypes.closest('.visibility-visible')) {
      document.body.style.overflow = 'hidden'
    }
    closeMenu()
  }

  const smoothScrolling = (e) =>{
    // присваиванием href то есть ссылку к какому id перейти экрану
    let elmnt = document.querySelector(e.target.hash)
    // экран с настройками переходт к элементу по id
    elmnt.scrollIntoView({
          block: "start",
          behavior: "smooth"
    });
    closeMenu()
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', (e)=> {
      e.preventDefault()
      smoothScrolling(e)})
  })

  buttonFooter.addEventListener('click',(e)=> {
    e.preventDefault()
    smoothScrolling(e)})

  // просулшивание кнопки открытия меню
  menuBtn.addEventListener('click', openMenu)
  // кнопка закрытия меню
  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-menu')) {
      closeMenu()
    }
  })
  // отслеживаем нажатие по документу
  document.addEventListener('click',(e) => {

    if (e.target.closest('.menu-link.no-overflow') ||
       (e.target.closest('.link-list-repair')) ||
        //  кнопка закрытия дполнительных услуг
        (e.target.closest('.popup.popup-repair-types') && e.target.closest('.close.mobile-hide')) ||
        e.target.closest('.popup.popup-repair-types') && e.target.closest('.close')
        ) {
        openCloseList(e)
    }
  })

}

export default menu