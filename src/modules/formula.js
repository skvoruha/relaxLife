const formula =() =>{
  // если экран меньше 1024 пискслей то заверщаем функцию тобы не было конфликтов
  const widthScreen = document.documentElement.clientWidth
  if (widthScreen < 1024) {
    return
  }

  const formula = document.getElementById('formula')
  // const formulaItemPopup = document.querySelector()
  const elem = []


  formula.addEventListener('mouseover', (e) =>{
    // matches
    if (e.target.closest('.formula-item__icon')) {
      const item = e.target.closest('.formula-item');
      item.style.zIndex = '1'
      elem[0] =  e.target.closest('.formula-item')
      const itemIcon = e.target.closest('.formula-item__icon')
      // при наведении делаем активным оранжевый фон кнопки
      const formulaItemIconInner = itemIcon.querySelector('.formula-item__icon-inner')
      formulaItemIconInner.style.opacity = '1'

      // поиск в item эклмент
      const formulaItem = itemIcon.querySelector('.formula-item-popup')
      // если элемент ниже крайней верхней точки экрано
      let y = formulaItem.getBoundingClientRect().y

      openFormula(formulaItem, y, item)
    }
  })
  formula.addEventListener('mouseout', () =>{
    if (elem[0]) {
      // собираем все выделенныq элемет и убираем opacity
      const item = elem[0]
      item.style.zIndex = 0
      const formulaItem  = item.querySelector('.formula-item-popup')
      const formulaItemIconInner = item.querySelector('.formula-item__icon-inner')
      formulaItemIconInner.style.opacity = '0'
      closeFormula(formulaItem)
    }

  })

  const openFormula = (formulaItem, y, item) =>{
    let indent = +item.getBoundingClientRect().height

    window.addEventListener('scroll', function() {
      // console.log(y);
    });
    if (y < 0) {
      // item.style.zIndex = "1"
      formulaItem.style.cssText = `
      visibility: visible;
      opacity: 1;
      bottom: 0px;
      top: ${indent*1.1}px;
      `
      formulaItem.classList.add('flipTo')
    } else {
      formulaItem.style.cssText = `
      visibility: visible;
      opacity: 1;`
    }

  }

  const closeFormula = (formulaItem) =>{
    formulaItem.style.cssText = `
      visibility: hidden;
      opacity: 0;
      bottom: 90px;`
      formulaItem.classList.remove('flipTo')
  }


}
export default formula