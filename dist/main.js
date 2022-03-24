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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./modules/header.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/phoneMask */ \"./modules/phoneMask.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/privacyPolicy'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/formula'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n// import slider from \"./modules/slider\";\r\n\r\n\r\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('input[name=phone]')\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/privacyPolicy'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/formula'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\r\n// slider()\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\r\n\r\n\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId:'feedback1'})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId:'feedback2'})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId:'feedback3'})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId:'feedback4'})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId:'feedback5'})\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\r\n  formId:'feedback6'})\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/header.js":
/*!***************************!*\
  !*** ./modules/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst header =() =>{\r\n  const headerContactsArrow = document.querySelector('.header-contacts')\r\n  const headerContactPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord')\r\n  const headerContactsPhoneNumber = headerContactPhoneNumberAccord.querySelector('.header-contacts__phone-number')\r\n\r\n  let count = 1\r\n  headerContactsArrow.addEventListener('click', (e)=>{\r\n    //  клик по стрелочке\r\n    if (e.target.closest('.header-contacts__arrow > img')) {\r\n      count++;\r\n      if (count > 1) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 200,\r\n          timing(timeFraction) {\r\n            return Math.pow(timeFraction, 3)\r\n          },\r\n          draw(progress) {\r\n            headerContactPhoneNumberAccord.style.top = `${progress * 25}px`\r\n            headerContactsPhoneNumber.style.opacity = progress\r\n            e.target.style.transform = 'rotate(180deg)'\r\n            count = 0\r\n          }\r\n        });\r\n      } else {\r\n        headerContactPhoneNumberAccord.style.top = 0\r\n        headerContactsPhoneNumber.style.opacity = 0\r\n        e.target.style.transform = 'rotate(0deg)'\r\n        count = 1\r\n      }\r\n    }\r\n    // закрытие кнопки\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack:///./modules/header.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () =>{\r\n  // само меню\r\n  const menuBtn = document.querySelector('.menu__icon')\r\n  const menu = document.querySelector('.popup-dialog-menu')\r\n\r\n  const buttons = document.querySelectorAll('.popup-menu-nav__item')\r\n  const popupRepairTypes = document.querySelector('.popup-repair-types')\r\n  const buttonFooter = document.querySelector('.button-footer')\r\n  // функция открытия меню\r\n  const openMenu = () =>{\r\n    if (window.innerWidth > 576) {\r\n      menu.classList.add('showMenu')\r\n    }\r\n    menu.classList.add('showHide-menu')\r\n  }\r\n  // функция закрытия меню\r\n  const closeMenu = () =>{\r\n    menu.classList.remove('showMenu')\r\n    menu.classList.remove('showHide-menu')\r\n  }\r\n\r\n  const openCloseList = (e) =>{\r\n    e.preventDefault()\r\n    popupRepairTypes.classList.toggle('visibility-visible')\r\n    closeMenu()\r\n  }\r\n\r\n  const smoothScrolling = (e) =>{\r\n    // присваиванием href то есть ссылку к какому id перейти экрану\r\n    let elmnt = document.querySelector(e.target.hash)\r\n    // экран с настройками переходт к элементу по id\r\n    elmnt.scrollIntoView({\r\n          block: \"start\",\r\n          behavior: \"smooth\"\r\n    });\r\n    closeMenu()\r\n  }\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', (e)=> {\r\n      e.preventDefault()\r\n      smoothScrolling(e)})\r\n  })\r\n\r\n  buttonFooter.addEventListener('click',(e)=> {\r\n    e.preventDefault()\r\n    smoothScrolling(e)})\r\n\r\n  // просулшивание кнопки открытия меню\r\n  menuBtn.addEventListener('click', openMenu)\r\n  // кнопка закрытия меню\r\n  menu.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('close-menu')) {\r\n      closeMenu()\r\n    }\r\n  })\r\n  // отслеживаем нажатие по документу\r\n  document.addEventListener('click',(e) => {\r\n\r\n    if (e.target.closest('.menu-link.no-overflow') ||\r\n       (e.target.closest('.link-list.link-list-repair.mobile-hide.tablet-hide')) ||\r\n        //  кнопка закрытия дполнительных услуг\r\n        (e.target.closest('.popup.popup-repair-types') && e.target.closest('.close.mobile-hide')) ||\r\n        e.target.closest('.popup.popup-repair-types') && e.target.closest('.close')\r\n        ) {\r\n        openCloseList(e)\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/phoneMask.js":
/*!******************************!*\
  !*** ./modules/phoneMask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = (selector, masked = '+7 (___) ___-__-__') => {\r\n\tconst elems = document.querySelectorAll(selector);\r\n\tfunction mask(event) {\r\n\t\tconst keyCode = event.keyCode;\r\n\t\tconst template = masked,\r\n\t\t\tdef = template.replace(/\\D/g, \"\"),\r\n\t\t\tval = this.value.replace(/\\D/g, \"\");\r\n\t\tlet i = 0,\r\n\t\t\tnewValue = template.replace(/[_\\d]/g, function (a) {\r\n\t\t\t\treturn i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n\t\t\t});\r\n\t\ti = newValue.indexOf(\"_\");\r\n\t\tif (i !== -1) {\r\n\t\t\tnewValue = newValue.slice(0, i);\r\n\t\t}\r\n\t\tlet reg = template.substr(0, this.value.length).replace(/_+/g,\r\n\t\t\tfunction (a) {\r\n\t\t\t\treturn \"\\\\d{1,\" + a.length + \"}\";\r\n\t\t\t}).replace(/[+()]/g, \"\\\\$&\");\r\n\t\treg = new RegExp(\"^\" + reg + \"$\");\r\n\t\tif (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n\t\t\tthis.value = newValue;\r\n\t\t}\r\n\t\tif (event.type === \"blur\" && this.value.length < 5) {\r\n\t\t\tthis.value = \"\";\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tfor (const elem of elems) {\r\n\t\telem.addEventListener(\"input\", mask);\r\n\t\telem.addEventListener(\"focus\", mask);\r\n\t\telem.addEventListener(\"blur\", mask);\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/phoneMask.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({formId}) =>{\r\n  // получаем нужную форму по id\r\n  const form = document.getElementById(formId)\r\n  // получаем checkbox ? что согласны на передачу перс данных\r\n  const checkboxLabel = form.querySelector('.checkbox__input')\r\n\r\n  const statusBlock = document.createElement('div')\r\n\r\n  const loadText = 'Загрузка...'\r\n  const errorText = 'Ошибка'\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжеться!'\r\n  const modal = document.querySelector('.popup')\r\n\r\n\r\n\r\n  const validate = (list) =>{\r\n    let success = true\r\n    // провреям в списке еси там не ни одного класа success то success равняем false\r\n    list.forEach(input =>{\r\n      if (input.name == 'user_name' && input.value.length < 2) {\r\n          success = false\r\n      }\r\n      if (input.name == 'user_phone' && input.value.length < 6) {\r\n          success = false\r\n      }\r\n    })\r\n\r\n    return success\r\n  }\r\n\r\n   const sendData =  (data) =>{\r\n    return fetch('./server.php',{\r\n      method: 'POST',\r\n      body: JSON.stringify(data),\r\n      headers:{\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n      }).then(res => res.json())\r\n  }\r\n\r\n  const submitForm = () =>{\r\n    const formElements = form.querySelectorAll('input')\r\n    // СОБРАТЬ ВСЕ ДАННЫЕ ИЗ ФОРМЫ ЧТОБЫ НЕ ИСКАТЬ КАЖДЫЙ input\r\n    const formData = new FormData(form)\r\n    const formBody = {}\r\n\r\n    statusBlock.textContent = loadText\r\n\r\n\r\n    form.append(statusBlock)\r\n\r\n    formData.forEach((val , key) =>{\r\n      formBody[key] = val\r\n    })\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then(data =>{\r\n          statusBlock.textContent = successText\r\n          // мой код\r\n          const resultForm = document.querySelector('#result_form')\r\n          resultForm.textContent = data\r\n\r\n          formElements.forEach(input =>{\r\n            input.value = ''\r\n          })\r\n        })\r\n        .catch(error =>{\r\n          statusBlock.textContent = errorText\r\n        })\r\n        .finally(()=>{\r\n          setTimeout(() => statusBlock.textContent = '', 2000);\r\n          setTimeout(() => {\r\n          modal.style.display = 'none'\r\n          document.body.style.overflow = ''\r\n        }, 4000);\r\n        })\r\n    } else {\r\n      alert('Данные не валидны')\r\n      statusBlock.textContent = ''\r\n    }\r\n  }\r\n  try {\r\n    // проверяем наличие формы\r\n    if (!form) {\r\n      throw new Error(' Верните форму на место пожалуйста')\r\n    }\r\n\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault()\r\n      // провреям нажатие галочки на обработку персональных данных\r\n      if (checkboxLabel.checked) {\r\n        submitForm()\r\n      }\r\n\r\n    })\r\n  } catch(error) {\r\n    console.log(error.message);\r\n  }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;