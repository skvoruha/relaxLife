
import { getData } from "./getData"
import { uniqueType } from "./filters"
import { renderItems } from "./renderItems"
import { sendData} from "./sendData"
import { editData } from "./editData"
import { deleteData } from "./deleteData"

const tablePage = () =>{


  if (window.location.pathname !== '/admin/table.html') {
    return
  }
  const select = document.getElementById('typeItem')
  const tbody = document.getElementById('tbody')
  const modal = document.getElementById('modal')
  const serviceBtn = document.querySelector('.btn-addItem')
  const formSend = modal.querySelector('form')
  const modalHeader = document.querySelector('.modal__header')


  tbody.innerHTML = ''
  select.innerHTML = ''

  const renderItemsFunc = () =>{
    getData(`http://localhost:3000/items`)
      .then((data) =>{
        renderItems(data,tbody)
        // создём элемент в котором перебирается массив и выбираются не повторющиееся элементы
        uniqueType(data,'type',select)
      })
      .catch((error)=>{
        console.log(error);
      })
  }


    // функция проверки
  const validate = (list) =>{
    let success = true
    // провреям в списке еси там не ни одного класа success то success равняем false
    // list.forEach(input =>{
    //   if (!input.classList.contains('success')) {
    //     success = false
    //   }
    // })

    return success
  }

  const preparingSendForm = (id) =>{
    const form = modal.querySelector('form')
    // СОБРАТЬ ВСЕ ДАННЫЕ ИЗ ФОРМЫ ЧТОБЫ НЕ ИСКАТЬ КАЖДЫЙ input
    const formAllInput = formSend.querySelectorAll('input')
    // тело запроса
    const formBody = {}
    // создаем переменную с формаими
    const formData = new FormData(form)
    if (!formData) {
      modal.style.display = 'none'
      return
    }
    // записыаем вто запроса данные собраные с инпутоов
    formData.forEach((val , key) =>{
      formBody[key] = val
    })
    if (!id) {
      formBody.id = Date.now()
      if (validate(formAllInput)) {
        sendData('http://localhost:3000/items',formBody)
          .then(data =>{
            formAllInput.forEach(input =>{
              input.value = ''
            })
            renderItemsFunc()
          })
      } else {
        alert('Данные не валидны')
        // http://localhost:3000/items?id=9041080382
      }
    } else{
      // byxfxt писваиваем в бади текущий id
      editData(formBody,id)
        .then(data =>{
          formAllInput.forEach(input =>{
            input.value = ''
          })
          renderItemsFunc()
        })
    }
  }

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

  serviceBtn.addEventListener('click',(e)=>{
    modalHeader.textContent = 'Добавление новой услуги'
    modal.style.display = 'flex'
    e.preventDefault()
  })

  modal.addEventListener('click', (e)=>{
    e.preventDefault()
    if (!e.target.closest('.modal') || e.target.closest('.svg_ui') || e.target.closest('.cancel-button')  ) {
      const allInput = modal.querySelectorAll('input')

      allInput.forEach(e => {
        e.value = ''
      });
      modal.style.display = 'none'
    }
  })

  // стаим прослушивание на всю таблицу
  let idItems = ''
  document.addEventListener('click',(e)=>{
    if (e.target.closest('.action-change')) {
      modalHeader.textContent = 'Редактировать услугу'
      // открываем модалку
      modal.style.display = 'flex'

      const allInput = formSend.querySelectorAll('input')
      const row = e.target.closest('.table__row')
      const id = row.querySelector('.table__id')


      allInput.forEach(e => {
        const elem = row.querySelector(`.table-${e.name}`)
        // если e.name равеен руб то
        if (e.name == 'cost') {
          // убираем все слова
          e.value = elem.textContent.trim().replace(/[^+\d]/g, '')
        } else {
          e.value = elem.textContent.trim()
        }
      });

      idItems = id.textContent
      // preparingSendForm(id.textContent)
    }
    if (e.target.closest('.button-ui_firm')) {
        e.preventDefault()
        preparingSendForm(idItems)
    }

    if (e.target.closest('.action-remove')) {
      e.preventDefault()
      const formAllInput = formSend.querySelectorAll('input')
      const row = e.target.closest('.table__row')
      const id = row.querySelector('.table__id')
      idItems = id.textContent

      console.log(idItems);


      deleteData(idItems)
        .then(data =>{
          formAllInput.forEach(input =>{
            input.value = ''
          })
          renderItemsFunc(idItems)
        })
    }
  })

  // стартовый запуск
  renderItemsFunc()
}

export default tablePage


// modalHeader.textContent = 'Добавление новой услуги'