const formula = () =>{
  // получаем весь элемент
  const formula = document.getElementById('formula')
  const elem = []
  formula.addEventListener('mouseover', (e) =>{
    if (e.target.closest('.formula-item__icon')) {
      // получаем сам элемент с цифрами
      const item = e.target.closest('.formula-item')
      // добавляем активный класс при наведении
      item.classList.add('active-item')
      // записываем в масив под индексом какой именно элемент открылся
      elem[0] = item
      // поиск в item эклмент
      const formulaItem = item.querySelector('.formula-item-popup')

      openFormula(formulaItem, item)
    }
  })

  formula.addEventListener('mouseout', (e) =>{
    // проверяем наш массив на пустоту
    if (elem[0]) {
      // собираем все выделенныq элемет и убираем opacity
      const item = elem[0]
      item.classList.remove('active-item')
      // получаем конкретный элемент для того чтобы поолуччить нужный formula-item-popup
      const itemIcon = e.target.closest('.formula-item__icon')
      const formulaItem  = itemIcon.querySelector('.formula-item-popup')
      // console.log(formulaItem);
      closeFormula(formulaItem)
    }
  })

  const openFormula = (formulaItem, item) =>{
    // если элемент ниже крайней верхней точки экрано
    let y = formulaItem.getBoundingClientRect().y
    // читаем высоту элмента
    let indent = +item.getBoundingClientRect().height

    window.addEventListener('scroll', function() {
      // console.log(y);
    });
    if (y < 0) {
      // item.style.zIndex = "1"
      formulaItem.style.cssText = `
      bottom: 0px;
      top: ${indent*1.1}px;
      `
      formulaItem.classList.add('flipTo')
    }
  }

  const closeFormula = (formulaItem) =>{
    formulaItem.style.cssText = `
      bottom: 90px;`
      formulaItem.classList.remove('flipTo')
  }
}

export default formula