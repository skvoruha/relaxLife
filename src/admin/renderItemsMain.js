export const renderItems = (data,tbody)=>{
  tbody.innerHTML = ''
  // НАДО БУДЕТ ОИЧТИТЬ ТАБЛИЦУ ПЕРЕД ЗАПОЛНЕНИЕМ
  console.log(data.length);
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
      row.className = 'table__row'
      row.innerHTML = `
                      <td class="repair-types-name">
                        ${data[i].name}
                      </td>
                      <td class="mobile-col-title tablet-hide desktop-hide">
                        Ед.измерения
                      </td>
                      <td class="mobile-col-title tablet-hide desktop-hide">
                        Цена за ед.
                      </td>
                      <td class="repair-types-value"><sup></sup>${data[i].units}</td>
                      <td class="repair-types-value">${data[i].cost} руб.</td>
                      `

      // сохраняем в таблице элементы
      tbody.appendChild(row);
  }
}

