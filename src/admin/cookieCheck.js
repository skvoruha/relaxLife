import { getData } from "./getData";
import { setCookie } from "./cookieSet";

export const cookieCheck = () =>{

  // если открыта стр авторзации то заканчиваем функцию
  if (window.location.pathname == '/admin/index.html') {
    return
  }
  // проверяем длину куки если она меньше 1 или НЕ открыта  страница авторизации то переадресовываем на стр авторизации
  if (document.cookie.length < 1 && window.location.pathname !== '/admin/index.html') {
    window.location.href = 'index.html';
    return
  }
  // возвращает куки с указанным name,
  // или undefined, если ничего не найдено
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  let x = getCookie('user')
  const cook = JSON.parse(x)
  getData(`http://localhost:3000/users?login=${cook[0].login}&salt=${cook[0].salt}`).then((data)=>{
    if (data.length > 0) {
    } else {
      const deleteCookie = (name)=> {
        setCookie(name, "", {
          'max-age': -1
        })
      }

      deleteCookie('user')
      window.location.href = 'index.html';
    }
  })
}