import { getData } from "../admin/getData"
import { renderItems } from "../admin/renderItemsMain"
import { uniqueTypeMain } from "../admin/filters"

const repairTypes = () =>{
  const listRepairTypes = document.querySelector('.popup-repair-types')
  let tableParent = document.querySelector('.popup-repair-types-content-table__list')
  const tbody = tableParent.querySelector('tbody')

  // список где выведены элементы с типами
  const navList = document.querySelector('.nav-list-popup-repair')


  const renderItemsFunc = () =>{
    getData(`http://localhost:3000/items`)
      .then((data) =>{
        renderItems(data,tbody)
        // создём элемент в котором перебирается массив и выбираются не повторющиееся элементы
        uniqueTypeMain(data,'type',navList)
      })
      .catch((error)=>{
        console.log(error);
      })
  }


  navList.addEventListener('click',(e)=>{
    if (e.target.closest('.popup-repair-types-nav__item')) {


      const response = e.target.value.trim()
      if (response === 'Все услуги') {
        getData(`http://localhost:3000/items`).then((data) =>{
          renderItems(data,tbody)
        })
      } else {
        getData(`http://localhost:3000/items?type=${response}`).then((data) =>{
          renderItems(data,tbody)
        })
      }

      const items = document.querySelector('.nav-list-popup-repair')
      const itemDel = items.querySelector('.active-btn')
      itemDel.classList.remove('active-btn')
      e.target.classList.add('active-btn')

      const switchInner = document.getElementById('switch-inner')
      switchInner.textContent = response


    }
  })

  renderItemsFunc()

}

export default repairTypes
