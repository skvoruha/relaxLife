import {popupThank} from  './popupThank'

const sendForm = ({formId}) =>{
  // получаем нужную форму по id
  const form = document.getElementById(formId)
  // получаем checkbox ? что согласны на передачу перс данных
  const checkboxLabel = form.querySelector('.checkbox__input')

  // const statusBlock = document.createElement('div')
  const statusBlock = form.querySelector('.status')


  const loadText = 'Загрузка...'
  const errorText = 'Ошибка'
  const successText = 'Спасибо! Наш менеджер с вами свяжеться!'
  const modal = document.querySelector('.popup')
  const persPolicty = 'Нажмите кнопку согласия передачи перс. даннных'



  const validate = (list) =>{
    let success = true
    // провреям в списке еси там не ни одного класа success то success равняем false
    list.forEach(input =>{
      if (input.name == 'name' && input.value.length < 2) {
          statusBlock.textContent = "Имя должно быть не менее двух символов"
          success = false
        }
      if (input.name == 'phone' && input.value.length < 18) {
          statusBlock.textContent = "Номер телефона должен содержать не менее 11 символов"
          success = false
      }
    })

    return success
  }

   const sendData =  (data) =>{
    return fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
      }).then(res => res.json())
  }
  const submitForm = () =>{
    const formElements = form.querySelectorAll('input')
    // СОБРАТЬ ВСЕ ДАННЫЕ ИЗ ФОРМЫ ЧТОБЫ НЕ ИСКАТЬ КАЖДЫЙ input
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText

    formData.forEach((val , key) =>{
      formBody[key] = val
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then(data =>{
          statusBlock.textContent = successText

          formElements.forEach(input =>{
            input.value = ''
          })
          popupThank()
        })
        .catch(error =>{
          statusBlock.textContent = errorText
        })
        .finally(()=>{

          // setTimeout(() => statusBlock.textContent = '', 2000);
          setTimeout(() => {
          statusBlock.textContent = ' '
          modal.style.display = 'none'
          // document.body.style.overflow = ''
        }, 3000);
        })
    } else {
      // alert('Данные не валидны')
      // statusBlock.textContent = ''
      setTimeout(() => {statusBlock.textContent = ' ' }, 3000);
    }
  }
  try {
    // проверяем наличие формы
    // form.append(statusBlock)
    if (!form) {
      throw new Error(' Верните форму на место пожалуйста')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      // провреям нажатие галочки на обработку персональных данных
      console.log(!checkboxLabel.checked);
      if (!checkboxLabel.checked) {
        statusBlock.textContent = persPolicty
        // setTimeout(() => statusBlock.textContent = '', 2000);
      }

      if (checkboxLabel.checked) {
        submitForm()
      }

    })
  } catch(error) {
    console.log(error.message);
  }

}

export default sendForm