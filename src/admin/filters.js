export const uniqueType = (data,typeItem,select) => {
  // сначала опустишим sekectn
  select.innerHTML = ''

  let typeItemUniq = []
  // перебор все значений heroes и сохранение как массив
  data.forEach((e, i) => {
    typeItemUniq[i] = e[typeItem]
  });

  const uniqueType = Array.from(new Set(typeItemUniq));

  // нужно записать в переенюу перебор типов из базы данных
  uniqueType.forEach(e => {
    if (e) {
      const option = document.createElement('option')
      option.value = e
      option.textContent = e
      select.append(option)
    }
  });
  const optionAll = document.createElement('option')
  optionAll.value = 'Все услуги'
  optionAll.textContent = 'Все услуги'
  // устанавливаем атрибут по умолчнию
  optionAll.setAttribute('selected','')
  select.append(optionAll)
}


export const parameterFilter = (data,numOption,selectParameterNum) =>{

  return data.filter((heroesItem) =>{
    console.log(heroesItem[numOption] === selectParameterNum);
    return heroesItem[numOption] === selectParameterNum
  })
}

export const uniqueTypeMain = (data,typeItem,navList) => {
  // сначала опустишим sekectn
  navList.innerHTML = ''

  let typeItemUniq = []
  // перебор все значений heroes и сохранение как массив
  data.forEach((e, i) => {
    typeItemUniq[i] = e[typeItem]
  });

  const uniqueType = Array.from(new Set(typeItemUniq));

  // нужно записать в переенюу перебор типов из базы данных
  uniqueType.forEach(e => {
    if (e) {
      const button = document.createElement('button')
      button.value = e
      button.className = 'button_o popup-repair-types-nav__item'
      button.textContent = e
      navList.append(button)
      // <button class="button_o popup-repair-types-nav__item active"> Потолок: Демонтажные работы </button>
    }
  });
  const buttonAll = document.createElement('button')
  buttonAll.value = 'Все услуги'
  buttonAll.className = 'button_o popup-repair-types-nav__item active'
  buttonAll.textContent = 'Все услуги'

  navList.prepend(buttonAll)
}