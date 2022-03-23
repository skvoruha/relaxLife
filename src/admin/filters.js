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