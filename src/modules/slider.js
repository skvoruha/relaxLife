const slider = () =>{
  const formulaSliderWrap = document.querySelector('.formula-slider-wrap')
  const formulaSlider = formulaSliderWrap.querySelector('.formula-slider')
  const slides = formulaSliderWrap.querySelectorAll('.formula-item.formula-slider__slide')

  formulaSlider.innerHTML = ''
  slides[slides.length - 1].classList.add('formula-slider__slide-df')
  slides[0].classList.add('formula-slider__slide-active')
  slides[1].classList.add('formula-slider__slide-df')

  formulaSlider.append(slides[slides.length - 1])
  formulaSlider.append(slides[0])
  formulaSlider.append(slides[1])

  const saveSlide = (currentSlide) =>{
    let nextSlidesItem
    let prevSlidesItem
    formulaSlider.innerHTML = ''
    // если текущий номер слайдеа меньше 0

    if (currentSlide - 1 < 0) {
      prevSlidesItem = slides.length - 1
    } else {
      prevSlidesItem = currentSlide -1
    }
    if (currentSlide + 1 >= slides.length) {
      nextSlidesItem = 0
    } else {
      nextSlidesItem = currentSlide + 1
    }
    nextSlide(slides,prevSlidesItem,'formula-slider__slide-df')
    nextSlide(slides,nextSlidesItem,'formula-slider__slide-df')
    formulaSlider.append(slides[prevSlidesItem])
    formulaSlider.append(slides[currentSlide])
    formulaSlider.append(slides[nextSlidesItem])
  }



  // меняем стиль для блока со слайдерами
  // если экран менье 1024 px то меняем min-height
  const widthScreen = document.documentElement.clientWidth
  if (widthScreen < 1024) {
    formulaSlider.style.cssText = `
    display:flex;
    min-height: auto;
    margin-top: 60px`
  }
  const sliderArrow = document.querySelectorAll('.slider-arrow')
  sliderArrow.forEach(element => {
    element.style.top = '85%'
  });
  const timeInterval = 2000
  let currentSlide = 0
  // предидущий слайд
  let interval
  const prevSlide = (elems, index, strClass) =>{
    elems[index].classList.remove(strClass)
  }

  // следующий слайд
  const nextSlide = (elems, index, strClass) =>{
    elems[index].classList.add(strClass)
  }

  const autoSlide = () =>{
    // удаляем у элемента активный класс
    prevSlide(slides,currentSlide,'formula-slider__slide-active')
    // убираем 3 элемент который находится до пред слайда
    currentSlide++
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }
    nextSlide(slides,currentSlide,'formula-slider__slide-active')

    saveSlide(currentSlide)

  }
  // по умолчанию таймер равен 1 сек
  const startSlide = (timeInterval = 1000) =>{
    interval = setInterval(autoSlide,timeInterval)

  }
  const stopSlide = () =>{
    clearInterval(interval)
  }
  // следим за событием нажатий
  formulaSliderWrap.addEventListener('click', (e)=>{
    e.preventDefault()

    if (e.target.closest('#formula-arrow_right')) {
      prevSlide(slides,currentSlide,'formula-slider__slide-active')
      // убираем 3 элемент который находится до пред слайда
      currentSlide++
      if (currentSlide >= slides.length) {
        currentSlide = 0
      }
      nextSlide(slides,currentSlide,'formula-slider__slide-active')

      saveSlide(currentSlide)
    }
    if (e.target.closest('#formula-arrow_left')) {
      prevSlide(slides,currentSlide,'formula-slider__slide-active')
      // убираем 3 элемент который находится до пред слайда
      currentSlide--
      if (currentSlide < 0) {
        currentSlide = slides.length - 1
      }
      nextSlide(slides,currentSlide,'formula-slider__slide-active')

      saveSlide(currentSlide)
    }
  })

  formulaSliderWrap.addEventListener('mouseenter',(e) =>{
    if (e.target.matches('.slider-arrow_right-formula, .slider-arrow_left-formula')) {
      stopSlide()
    }
    // параметр true активирование вспытия
    // чтобы события обрабатыались на дчернем желменте
  }, true)

  formulaSliderWrap.addEventListener('mouseleave',(e) =>{
    if (e.target.matches('.slider-arrow_right-formula')) {
      // startSlide(timeInterval)
    }
  }, true)

  // startSlide(timeInterval)
}

export default slider