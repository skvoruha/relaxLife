import {getData} from './getData'
import { cookie } from './cookieSave'

const login = () =>{
  const form = document.querySelector('form')
  // собираем все инпуты
  const inputName = document.getElementById('name')
  const inputPassword = document.getElementById('type')

  // получаем пременюу куда будт записвать резльатты операции
  const statusBlock = document.querySelector('.text-warning')

  try {
    // проверяем налиие формы
    if (!form) {
      throw new Error('Верните форму на место пожалуйста')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()
      getData(`http://localhost:3000/users?login=${inputName.value}&password=${inputPassword.value}`).then((data)=>{
      inputName.value = ''
      inputPassword.value = ''

      if (data.length <= 0) {
          statusBlock.textContent = "Не верый логин или пароль"
        } else {
          cookie(data)
          window.location.href = 'table.html';
        }
      }).catch((error)=>{
        // опусташаем поля

        console.log(error);
      })
    })
  } catch(error)
  {
    console.log('ошибка');
  }
}

export default login