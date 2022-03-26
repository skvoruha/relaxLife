import Swiper, {Navigation,Pagination} from 'swiper';
import {getClassFromId} from  './helpers'
// активирум моудли с пагнацие и навигацией
Swiper.use([Navigation,Pagination]);

const modal = () =>{

  const portfolio = document.getElementById('portfolio')
  const portfolioSlider = portfolio.querySelector('.portfolio-slider')
  const portfolioModal = document.querySelector('.popup-dialog-portfolio')
  // получаем все слайды по которым мы нажимаем
  const portfolioSliderSlideFrame = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame')
  // получаем элементы с текстами
  const popupPortfolioText = portfolioModal.querySelectorAll('.popup-portfolio-text')
  // получаем слайдер
  const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap')
  // кнопки слайдера
  const popupPortfolioRight = document.getElementById('popup_portfolio_right')
  const popupPortfolioLeft = document.getElementById('popup_portfolio_left')

  // popup-dialog-portfolio
  const openPortfolioModal = (e)=>{
    portfolioModal.classList.add('visibility-visible')
  }
  const closePortfolioModal = (e)=>{
    portfolioModal.classList.remove('visibility-visible')
  }
  const openTextProtfolio = (count) =>{
    // получаем индекс нажатого портфолио
    const activeText = popupPortfolioText[count]
    // добавляем класс активности элменту с описанием
    activeText.classList.add('active-text')
    // устанавливаем к какому слайду перейти при открыти слйдера
    popupPortfolioSwiperSliderWrap.slideTo(count,1)
  }
  const closeTextPortfolio = () =>{
    const closeText = portfolioModal.querySelector('.active-text')
    closeText.classList.remove('active-text')
  }

  document.addEventListener('click',(e)=> {
    // ЭТО НОМЕР НАЖАТОГО ИЛИ ВЫБРАННОГО ПОРТФОЛИО
    let count

    if (!e.target.closest('.popup-dialog-portfolio') &&
      portfolioModal.classList.contains('visibility-visible')) {
      closeTextPortfolio()
      closePortfolioModal()
    }

    if (e.target.closest('.portfolio-slider__slide-frame')) {
      openPortfolioModal()
      for (let i = 0; i < portfolioSliderSlideFrame.length; i++) {
        if (portfolioSliderSlideFrame[i] == e.target) {
          count = i
        }
      }
      openTextProtfolio(count)
    }

    if (e.target.closest('.popup-arrow_left')) {
      // проверяем если текущий инекс равен 0в то убираем кнопку
      if (popupPortfolioSwiperSliderWrap.activeIndex == 0) {
        popupPortfolioLeft.style.display = 'none'
        popupPortfolioRight.style.display = 'block'
      }
      closeTextPortfolio()
      openTextProtfolio(+popupPortfolioSwiperSliderWrap.activeIndex)
    }
    if (e.target.closest('.popup-arrow_right')) {
      // проверяем если текущий инекс равен колчиесвто элментов то убираем кнопку
      if (popupPortfolioSwiperSliderWrap.activeIndex == portfolioSliderSlideFrame.length - 1) {
        popupPortfolioRight.style.display = 'none'
        popupPortfolioLeft.style.display = 'block'
      }
      if (popupPortfolioSwiperSliderWrap.activeIndex == 1) {
        popupPortfolioLeft.style.display = 'block'
      }
      if (popupPortfolioSwiperSliderWrap.activeIndex == portfolioSliderSlideFrame.length - 2) {
        popupPortfolioRight.style.display = 'block'
      }
      closeTextPortfolio()
      // открываем тект по текущему индексу
      openTextProtfolio(+popupPortfolioSwiperSliderWrap.activeIndex)
    }

  })

  popupPortfolioSliderWrap.style.overflow = 'hidden'
  popupPortfolioRight.style.zIndex = 1
  popupPortfolioLeft.style.zIndex = 1

  const popupPortfolioSwiperSliderWrap = new Swiper(`.${popupPortfolioSliderWrap.className}`, {
    navigation: {
      nextEl:  `.${getClassFromId(popupPortfolioRight)}`,
      prevEl:  `.${getClassFromId(popupPortfolioLeft)}`,
    },
    slidesPerView: 1,
    // количество пролистываемых слайдов
    slidesPerGroup: 1,
    simulateTouch: false,
    nested: true,
  });
}

 export default modal