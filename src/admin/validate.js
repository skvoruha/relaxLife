const validate = () =>{
  if (window.location.pathname == '/admin/index.html') {
    const inputName = document.getElementById('name')
    const inputPassword = document.getElementById('type')

    inputName.addEventListener('input',() =>{
      // заменяем все не латинские буквы и не цифры
      inputName.value = inputName.value.replace(/[\W\s]+/gi,'');
      // console.log(element);
    })
  } else {
    return
  }


}

export default validate