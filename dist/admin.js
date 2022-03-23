/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _admin_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/getData */ \"./admin/getData.js\");\n/* harmony import */ var _admin_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/validate */ \"./admin/validate.js\");\n/* harmony import */ var _admin_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/login */ \"./admin/login.js\");\n/* harmony import */ var _admin_cookieCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/cookieCheck */ \"./admin/cookieCheck.js\");\n/* harmony import */ var _admin_tablePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/tablePage */ \"./admin/tablePage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_admin_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_admin_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_admin_cookieCheck__WEBPACK_IMPORTED_MODULE_3__.cookieCheck)()\r\n;(0,_admin_tablePage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\r\n// Генерация пароля салт\r\n// function gen_password(len){\r\n//     if(len > 10) len = 10;\r\n//     len = len * (-1);\r\n//     return Math.random().toString(36).slice(len);\r\n// }\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./admin/cookieCheck.js":
/*!******************************!*\
  !*** ./admin/cookieCheck.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cookieCheck\": () => (/* binding */ cookieCheck)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./admin/getData.js\");\n/* harmony import */ var _cookieSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookieSet */ \"./admin/cookieSet.js\");\n\r\n\r\n\r\nconst cookieCheck = () =>{\r\n\r\n  // если открыта стр авторзации то заканчиваем функцию\r\n  if (window.location.pathname == '/admin/index.html') {\r\n    return\r\n  }\r\n  // проверяем длину куки если она меньше 1 или НЕ открыта  страница авторизации то переадресовываем на стр авторизации\r\n  if (document.cookie.length < 1 && window.location.pathname !== '/admin/index.html') {\r\n    window.location.href = 'index.html';\r\n    return\r\n  }\r\n  // возвращает куки с указанным name,\r\n  // или undefined, если ничего не найдено\r\n  function getCookie(name) {\r\n    let matches = document.cookie.match(new RegExp(\r\n      \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\r\n    ));\r\n    return matches ? decodeURIComponent(matches[1]) : undefined;\r\n  }\r\n\r\n  let x = getCookie('user')\r\n  const cook = JSON.parse(x)\r\n  ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/users?login=${cook[0].login}&salt=${cook[0].salt}`).then((data)=>{\r\n    if (data.length > 0) {\r\n    } else {\r\n      const deleteCookie = (name)=> {\r\n        (0,_cookieSet__WEBPACK_IMPORTED_MODULE_1__.setCookie)(name, \"\", {\r\n          'max-age': -1\r\n        })\r\n      }\r\n\r\n      deleteCookie('user')\r\n      window.location.href = 'index.html';\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack:///./admin/cookieCheck.js?");

/***/ }),

/***/ "./admin/cookieSave.js":
/*!*****************************!*\
  !*** ./admin/cookieSave.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cookie\": () => (/* binding */ cookie)\n/* harmony export */ });\nconst cookie = (data) =>{\r\n  delete data[0].password\r\n  if (data) {\r\n    document.cookie = 'user=' + JSON.stringify(data) + '; max-age=3600'\r\n  }\r\n}\n\n//# sourceURL=webpack:///./admin/cookieSave.js?");

/***/ }),

/***/ "./admin/cookieSet.js":
/*!****************************!*\
  !*** ./admin/cookieSet.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\nconst setCookie = (name, value, options = {}) => {\r\n\r\n  options = {\r\n    path: '/admin'\r\n  };\r\n\r\n  if (options.expires instanceof Date) {\r\n    options.expires = options.expires.toUTCString();\r\n  }\r\n\r\n  let updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\r\n\r\n  for (let optionKey in options) {\r\n    updatedCookie += \"; \" + optionKey;\r\n    let optionValue = options[optionKey];\r\n    if (optionValue !== true) {\r\n      updatedCookie += \"=\" + optionValue;\r\n    }\r\n  }\r\n\r\n  document.cookie = updatedCookie;\r\n}\n\n//# sourceURL=webpack:///./admin/cookieSet.js?");

/***/ }),

/***/ "./admin/deleteData.js":
/*!*****************************!*\
  !*** ./admin/deleteData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteData\": () => (/* binding */ deleteData)\n/* harmony export */ });\nconst deleteData = async (id) =>{\r\n  const response = await fetch(`http://localhost:3000/items/${id}`,{\r\n    method: 'DELETE',\r\n    headers:{\r\n        \"Content-Type\": \"application/json\"\r\n    }\r\n  })\r\n  if (!response.ok) {\r\n    throw new Error(`Ошибка по адресу ${`http://localhost:3000/items/${id}`} , статус ошибки ${response.status}`)\r\n  }\r\n  return await response.json();\r\n}\n\n//# sourceURL=webpack:///./admin/deleteData.js?");

/***/ }),

/***/ "./admin/editData.js":
/*!***************************!*\
  !*** ./admin/editData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editData\": () => (/* binding */ editData)\n/* harmony export */ });\nconst editData = async (data,id) =>{\r\n  if (data.length < 1) {\r\n    return\r\n  }\r\n  const response = await fetch(`http://localhost:3000/items/${id}`,{\r\n    method: 'PUT',\r\n    body: JSON.stringify(data),\r\n    headers:{\r\n        \"Content-Type\": \"application/json\"\r\n    }\r\n  })\r\n  if (!response.ok) {\r\n    throw new Error(`Ошибка по адресу ${`http://localhost:3000/items/${id}`} , статус ошибки ${response.status}`)\r\n  }\r\n  return await response.json();\r\n}\n\n//# sourceURL=webpack:///./admin/editData.js?");

/***/ }),

/***/ "./admin/filters.js":
/*!**************************!*\
  !*** ./admin/filters.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parameterFilter\": () => (/* binding */ parameterFilter),\n/* harmony export */   \"uniqueType\": () => (/* binding */ uniqueType)\n/* harmony export */ });\nconst uniqueType = (data,typeItem,select) => {\r\n  // сначала опустишим sekectn\r\n  select.innerHTML = ''\r\n\r\n  let typeItemUniq = []\r\n  // перебор все значений heroes и сохранение как массив\r\n  data.forEach((e, i) => {\r\n    typeItemUniq[i] = e[typeItem]\r\n  });\r\n\r\n  const uniqueType = Array.from(new Set(typeItemUniq));\r\n\r\n  // нужно записать в переенюу перебор типов из базы данных\r\n  uniqueType.forEach(e => {\r\n    if (e) {\r\n      const option = document.createElement('option')\r\n      option.value = e\r\n      option.textContent = e\r\n      select.append(option)\r\n    }\r\n  });\r\n  const optionAll = document.createElement('option')\r\n  optionAll.value = 'Все услуги'\r\n  optionAll.textContent = 'Все услуги'\r\n  // устанавливаем атрибут по умолчнию\r\n  optionAll.setAttribute('selected','')\r\n  select.append(optionAll)\r\n}\r\n\r\n\r\nconst parameterFilter = (data,numOption,selectParameterNum) =>{\r\n\r\n  return data.filter((heroesItem) =>{\r\n    console.log(heroesItem[numOption] === selectParameterNum);\r\n    return heroesItem[numOption] === selectParameterNum\r\n  })\r\n}\n\n//# sourceURL=webpack:///./admin/filters.js?");

/***/ }),

/***/ "./admin/getData.js":
/*!**************************!*\
  !*** ./admin/getData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n\r\nconst getData = async (url) =>{\r\n  const response = await fetch(url);\r\n  // если от сервера пришел ответ false\r\n  if (!response.ok) {\r\n    throw new Error(`Ошибка по адресу ${url} , статус ошибки ${response.status}`)\r\n  }\r\n  return await response.json()\r\n  // return await response.json().then((data)=>{\r\n  //   console.log(data);\r\n  // })\r\n}\n\n//# sourceURL=webpack:///./admin/getData.js?");

/***/ }),

/***/ "./admin/login.js":
/*!************************!*\
  !*** ./admin/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./admin/getData.js\");\n/* harmony import */ var _cookieSave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookieSave */ \"./admin/cookieSave.js\");\n\r\n\r\n\r\nconst login = () =>{\r\n  const form = document.querySelector('form')\r\n  // собираем все инпуты\r\n  const inputName = document.getElementById('name')\r\n  const inputPassword = document.getElementById('type')\r\n\r\n  // получаем пременюу куда будт записвать резльатты операции\r\n  const statusBlock = document.querySelector('.text-warning')\r\n\r\n  try {\r\n    // проверяем налиие формы\r\n    if (!form) {\r\n      throw new Error('Верните форму на место пожалуйста')\r\n    }\r\n\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault()\r\n      ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/users?login=${inputName.value}&password=${inputPassword.value}`).then((data)=>{\r\n      inputName.value = ''\r\n      inputPassword.value = ''\r\n\r\n      if (data.length <= 0) {\r\n          statusBlock.textContent = \"Не верый логин или пароль\"\r\n        } else {\r\n          (0,_cookieSave__WEBPACK_IMPORTED_MODULE_1__.cookie)(data)\r\n          window.location.href = 'table.html';\r\n        }\r\n      }).catch((error)=>{\r\n        // опусташаем поля\r\n\r\n        console.log(error);\r\n      })\r\n    })\r\n  } catch(error)\r\n  {\r\n    console.log('ошибка');\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n//# sourceURL=webpack:///./admin/login.js?");

/***/ }),

/***/ "./admin/renderItems.js":
/*!******************************!*\
  !*** ./admin/renderItems.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderItems\": () => (/* binding */ renderItems)\n/* harmony export */ });\nconst renderItems = (data,tbody)=>{\r\n  tbody.innerHTML = ''\r\n  // НАДО БУДЕТ ОИЧТИТЬ ТАБЛИЦУ ПЕРЕД ЗАПОЛНЕНИЕМ\r\n  for (let i = 0; i < data.length; i++) {\r\n    let row = document.createElement('tr');\r\n      row.className = 'table__row'\r\n      row.innerHTML = `\r\n                <td class=\"table__id table__cell\">${data[i].id}</td>\r\n                <td class=\"table-type table__cell\">\r\n                  ${data[i].type}\r\n                </td>\r\n                <td class=\"table-name table__cell\">\r\n                  ${data[i].name}\r\n                </td>\r\n                <td class=\"table-units table__cell\">${data[i].units}</td>\r\n                <td class=\"table-cost table__cell\">${data[i].cost} руб</td>\r\n                <td>\r\n                  <div class=\"table__actions table__cell\">\r\n                    <button class=\"button action-change\">\r\n                      <span class=\"svg_ui\"\r\n                        ><svg class=\"action-icon_change\">\r\n                          <use\r\n                            xlink:href=\"./img/sprite.svg#change\"\r\n                          ></use></svg></span\r\n                      ><span>Изменить</span>\r\n                    </button>\r\n                    <button class=\"button action-remove\">\r\n                      <span class=\"svg_ui\"\r\n                        ><svg class=\"action-icon_remove\">\r\n                          <use\r\n                            xlink:href=\"./img/sprite.svg#remove\"\r\n                          ></use></svg></span\r\n                      ><span>Удалить</span>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n      `;\r\n      // сохраняем в таблице элементы\r\n      tbody.appendChild(row);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./admin/renderItems.js?");

/***/ }),

/***/ "./admin/sendData.js":
/*!***************************!*\
  !*** ./admin/sendData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendData\": () => (/* binding */ sendData)\n/* harmony export */ });\nconst sendData = async (url,data) =>{\r\n  if (data.length < 1) {\r\n    return\r\n  }\r\n  const response = await fetch(url,{\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers:{\r\n        \"Content-Type\": \"application/json\"\r\n    }\r\n  })\r\n  if (!response.ok) {\r\n    throw new Error(`Ошибка по адресу ${url} , статус ошибки ${response.status}`)\r\n  }\r\n  return await response.json();\r\n}\n\n//# sourceURL=webpack:///./admin/sendData.js?");

/***/ }),

/***/ "./admin/tablePage.js":
/*!****************************!*\
  !*** ./admin/tablePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./admin/getData.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ \"./admin/filters.js\");\n/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderItems */ \"./admin/renderItems.js\");\n/* harmony import */ var _sendData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendData */ \"./admin/sendData.js\");\n/* harmony import */ var _editData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editData */ \"./admin/editData.js\");\n/* harmony import */ var _deleteData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteData */ \"./admin/deleteData.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tablePage = () =>{\r\n\r\n\r\n  if (window.location.pathname !== '/admin/table.html') {\r\n    return\r\n  }\r\n  const select = document.getElementById('typeItem')\r\n  const tbody = document.getElementById('tbody')\r\n  const modal = document.getElementById('modal')\r\n  const serviceBtn = document.querySelector('.btn-addItem')\r\n  const formSend = modal.querySelector('form')\r\n  const btnFormSend = formSend.querySelector('.button-ui_firm')\r\n\r\n\r\n  tbody.innerHTML = ''\r\n  select.innerHTML = ''\r\n\r\n  const renderItemsFunc = () =>{\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/items`)\r\n      .then((data) =>{\r\n        ;(0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderItems)(data,tbody)\r\n        // создём элемент в котором перебирается массив и выбираются не повторющиееся элементы\r\n        ;(0,_filters__WEBPACK_IMPORTED_MODULE_1__.uniqueType)(data,'type',select)\r\n      })\r\n      .catch((error)=>{\r\n        console.log(error);\r\n      })\r\n  }\r\n\r\n\r\n    // функция проверки\r\n  const validate = (list) =>{\r\n    let success = true\r\n    // провреям в списке еси там не ни одного класа success то success равняем false\r\n    // list.forEach(input =>{\r\n    //   if (!input.classList.contains('success')) {\r\n    //     success = false\r\n    //   }\r\n    // })\r\n\r\n    return success\r\n  }\r\n\r\n  const preparingSendForm = (id) =>{\r\n    const form = modal.querySelector('form')\r\n    // СОБРАТЬ ВСЕ ДАННЫЕ ИЗ ФОРМЫ ЧТОБЫ НЕ ИСКАТЬ КАЖДЫЙ input\r\n    const formAllInput = formSend.querySelectorAll('input')\r\n    // тело запроса\r\n    const formBody = {}\r\n    // создаем переменную с формаими\r\n    const formData = new FormData(form)\r\n    if (!formData) {\r\n      modal.style.display = 'none'\r\n      return\r\n    }\r\n    // записыаем вто запроса данные собраные с инпутоов\r\n    formData.forEach((val , key) =>{\r\n      formBody[key] = val\r\n    })\r\n    if (!id) {\r\n      formBody.id = Date.now()\r\n      if (validate(formAllInput)) {\r\n        (0,_sendData__WEBPACK_IMPORTED_MODULE_3__.sendData)('http://localhost:3000/items',formBody)\r\n          .then(data =>{\r\n            formAllInput.forEach(input =>{\r\n              input.value = ''\r\n            })\r\n            renderItemsFunc()\r\n          })\r\n      } else {\r\n        alert('Данные не валидны')\r\n        // http://localhost:3000/items?id=9041080382\r\n      }\r\n    } else{\r\n      // byxfxt писваиваем в бади текущий id\r\n      (0,_editData__WEBPACK_IMPORTED_MODULE_4__.editData)(formBody,id)\r\n        .then(data =>{\r\n          formAllInput.forEach(input =>{\r\n            input.value = ''\r\n          })\r\n          renderItemsFunc()\r\n        })\r\n    }\r\n  }\r\n\r\n  select.addEventListener('change',(e)=>{\r\n    const selectname = select.options[select.selectedIndex].textContent.trim()\r\n    if (selectname === 'Все услуги') {\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/items`).then((data) =>{\r\n        (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderItems)(data,tbody)\r\n      })\r\n    } else {\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/items?type=${selectname}`).then((data) =>{\r\n        (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderItems)(data,tbody)\r\n      })\r\n    }\r\n  })\r\n\r\n  serviceBtn.addEventListener('click',(e)=>{\r\n    modal.style.display = 'flex'\r\n    e.preventDefault()\r\n  })\r\n\r\n  modal.addEventListener('click', (e)=>{\r\n    e.preventDefault()\r\n    if (!e.target.closest('.modal') || e.target.closest('.svg_ui') || e.target.closest('.cancel-button')  ) {\r\n      const allInput = modal.querySelectorAll('input')\r\n\r\n      allInput.forEach(e => {\r\n        e.value = ''\r\n      });\r\n      modal.style.display = 'none'\r\n    }\r\n  })\r\n\r\n  // стаим прослушивание на всю таблицу\r\n  let idItems = ''\r\n  document.addEventListener('click',(e)=>{\r\n    if (e.target.closest('.action-change')) {\r\n      // открываем модалку\r\n      modal.style.display = 'flex'\r\n\r\n      const allInput = formSend.querySelectorAll('input')\r\n      const row = e.target.closest('.table__row')\r\n      const id = row.querySelector('.table__id')\r\n\r\n\r\n      allInput.forEach(e => {\r\n        const elem = row.querySelector(`.table-${e.name}`)\r\n        // если e.name равеен руб то\r\n        if (e.name == 'cost') {\r\n          // убираем все слова\r\n          e.value = elem.textContent.trim().replace(/[^+\\d]/g, '')\r\n        } else {\r\n          e.value = elem.textContent.trim()\r\n        }\r\n      });\r\n\r\n      idItems = id.textContent\r\n      // preparingSendForm(id.textContent)\r\n    }\r\n    if (e.target.closest('.button-ui_firm')) {\r\n        e.preventDefault()\r\n        preparingSendForm(idItems)\r\n    }\r\n\r\n    if (e.target.closest('.action-remove')) {\r\n      e.preventDefault()\r\n      const formAllInput = formSend.querySelectorAll('input')\r\n      const row = e.target.closest('.table__row')\r\n      const id = row.querySelector('.table__id')\r\n      idItems = id.textContent\r\n\r\n      console.log(idItems);\r\n\r\n\r\n      (0,_deleteData__WEBPACK_IMPORTED_MODULE_5__.deleteData)(idItems)\r\n        .then(data =>{\r\n          formAllInput.forEach(input =>{\r\n            input.value = ''\r\n          })\r\n          renderItemsFunc(idItems)\r\n        })\r\n    }\r\n  })\r\n\r\n  // стартовый запуск\r\n  renderItemsFunc()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tablePage);\n\n//# sourceURL=webpack:///./admin/tablePage.js?");

/***/ }),

/***/ "./admin/validate.js":
/*!***************************!*\
  !*** ./admin/validate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () =>{\r\n  if (window.location.pathname == '/admin/index.html') {\r\n    const inputName = document.getElementById('name')\r\n    const inputPassword = document.getElementById('type')\r\n\r\n    inputName.addEventListener('input',() =>{\r\n      // заменяем все не латинские буквы и не цифры\r\n      inputName.value = inputName.value.replace(/[\\W\\s]+/gi,'');\r\n      // console.log(element);\r\n    })\r\n  } else {\r\n    return\r\n  }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./admin/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;