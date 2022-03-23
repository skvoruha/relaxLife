
import { getData } from "./getData"
import { uniqueType } from "./filters"
import { renderItems } from "./renderItems"

const tablePage = () =>{


  if (window.location.pathname !== '/admin/table.html') {
    return
  }
  const select = document.getElementById('typeItem')
  const tbody = document.getElementById('tbody')
  const modal = document.getElementById('modal')
  const serviceBtn = document.querySelector('.btn-addItem')

  tbody.innerHTML = ''
  select.innerHTML = ''

  getData(`http://localhost:3000/items`).then((data) =>{
    renderItems(data,tbody)
    // создём элемент в котором перебирается массив и выбираются не повторющиееся элементы
    uniqueType(data,'type',select)
  })
    .catch((error)=>{
      console.log(error);
    })

  select.addEventListener('change',(e)=>{
    const selectname = select.options[select.selectedIndex].textContent.trim()
    if (selectname === 'Все услуги') {
      getData(`http://localhost:3000/items`).then((data) =>{
        renderItems(data,tbody)
      })
    } else {
      getData(`http://localhost:3000/items?type=${selectname}`).then((data) =>{
        renderItems(data,tbody)
      })
    }
  })

  modal.style.display = 'flex'
  serviceBtn.addEventListener('click',(e)=>{
    e.preventDefault()

  })

  modal.addEventListener('click', (e)=>{
    e.preventDefault()
    if (!e.target.closest('.modal') || e.target.closest('.svg_ui') || e.target.closest('.cancel-button')  ) {
      modal.style.display = 'none'
    }
  })

}

export default tablePage