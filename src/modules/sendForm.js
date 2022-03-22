const sendForm = ({formId}) =>{
  // получаем нужную форму по id
  const form = document.getElementById(formId)
  // получаем checkbox ? что согласны на передачу перс данных
  const checkboxLabel = form.querySelector('.checkbox__input')

  const statusBlock = document.createElement('div')

  const loadText = 'Загрузка...'
  const errorText = 'Ошибка'
  const successText = 'Спасибо! Наш менеджер с вами свяжеться!'
  const modal = document.querySelector('.popup')



  const validate = (list) =>{
    let success = true
    // провреям в списке еси там не ни одного класа success то success равняем false
    list.forEach(input =>{
      if (input.name == 'user_name' && input.value.length < 2) {
          success = false
      }
      if (input.name == 'user_phone' && input.value.length < 6) {
          success = false
      }
    })

    return success
  }

   const sendData =  (data) =>{
    return fetch('./server.php',{
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


    form.append(statusBlock)

    formData.forEach((val , key) =>{
      formBody[key] = val
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then(data =>{
          statusBlock.textContent = successText
          // мой код
          const resultForm = document.querySelector('#result_form')
          resultForm.textContent = data

          formElements.forEach(input =>{
            input.value = ''
          })
        })
        .catch(error =>{
          statusBlock.textContent = errorText
        })
        .finally(()=>{
          setTimeout(() => statusBlock.textContent = '', 2000);
          setTimeout(() => {
          modal.style.display = 'none'
          document.body.style.overflow = ''
        }, 4000);
        })
    } else {
      alert('Данные не валидны')
      statusBlock.textContent = ''
    }
  }
  try {
    // проверяем наличие формы
    if (!form) {
      throw new Error(' Верните форму на место пожалуйста')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      // провреям нажатие галочки на обработку персональных данных
      if (checkboxLabel.checked) {
        submitForm()
      }

    })
  } catch(error) {
    console.log(error.message);
  }

}

export default sendForm