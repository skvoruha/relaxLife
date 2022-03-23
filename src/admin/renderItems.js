export const renderItems = (data,tbody)=>{
  tbody.innerHTML = ''
  // НАДО БУДЕТ ОИЧТИТЬ ТАБЛИЦУ ПЕРЕД ЗАПОЛНЕНИЕМ
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
      row.className = 'table__row'
      row.innerHTML = `
                <td class="table__id table__cell">${data[i].id}</td>
                <td class="table-type table__cell">
                  ${data[i].type}
                </td>
                <td class="table-name table__cell">
                  ${data[i].name}
                </td>
                <td class="table-units table__cell">${data[i].units}</td>
                <td class="table-cost table__cell">${data[i].cost} руб</td>
                <td>
                  <div class="table__actions table__cell">
                    <button class="button action-change">
                      <span class="svg_ui"
                        ><svg class="action-icon_change">
                          <use
                            xlink:href="./img/sprite.svg#change"
                          ></use></svg></span
                      ><span>Изменить</span>
                    </button>
                    <button class="button action-remove">
                      <span class="svg_ui"
                        ><svg class="action-icon_remove">
                          <use
                            xlink:href="./img/sprite.svg#remove"
                          ></use></svg></span
                      ><span>Удалить</span>
                    </button>
                  </div>
                </td>
      `;
      // сохраняем в таблице элементы
      tbody.appendChild(row);
  }
}