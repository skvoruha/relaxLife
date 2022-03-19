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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./modules/header.js\");\n/* harmony import */ var _modules_menu_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu-modal */ \"./modules/menu-modal.js\");\n/* harmony import */ var _modules_validateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validateForm */ \"./modules/validateForm.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/phoneMask */ \"./modules/phoneMask.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n// validateForm()\r\n;(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('input[name=phone]')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/header.js":
/*!***************************!*\
  !*** ./modules/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst header =() =>{\r\n  const headerContactsArrow = document.querySelector('.header-contacts')\r\n  const headerContactPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord')\r\n  const headerContactsPhoneNumber = headerContactPhoneNumberAccord.querySelector('.header-contacts__phone-number')\r\n\r\n  let count = 1\r\n\r\n  headerContactsArrow.addEventListener('click', (e)=>{\r\n    //  клик по стрелочке\r\n    if (e.target.closest('.header-contacts__arrow > img')) {\r\n      count++;\r\n      if (count > 1) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return Math.pow(timeFraction, 3)\r\n          },\r\n          draw(progress) {\r\n            headerContactPhoneNumberAccord.style.top = `${progress * 25}px`\r\n            headerContactsPhoneNumber.style.opacity = progress\r\n            e.target.style.transform = 'rotate(180deg)'\r\n            count = 0\r\n          }\r\n        });\r\n      } else {\r\n        headerContactPhoneNumberAccord.style.top = 0\r\n        headerContactsPhoneNumber.style.opacity = 0\r\n        e.target.style.transform = 'rotate(0deg)'\r\n        count = 1\r\n      }\r\n    }\r\n    // закрытие кнопки\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack:///./modules/header.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu-modal.js":
/*!*******************************!*\
  !*** ./modules/menu-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst menu = () =>{\r\n  // само меню\r\n  const menuBtn = document.querySelector('.menu__icon')\r\n  const menu = document.querySelector('.popup-dialog-menu')\r\n  const buttons = document.querySelectorAll('.popup-menu-nav__item')\r\n  const popupRepairTypes = document.querySelector('.popup-repair-types')\r\n  // функция открытия меню\r\n  const openMneu = () =>{\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 200,\r\n      timing(timeFraction) {\r\n        return Math.pow(timeFraction, 3)\r\n      },\r\n      draw(progress) {\r\n        progress = 1 - progress\r\n        if (window.innerWidth > 576) {\r\n          menu.style.transform = `translate3d(${progress}px, 0, 0)`\r\n          // menu.style.transform = `translate3d(${progress}px, 0, 0);`\r\n          //     transform: translate3d(645px, 0, 0);\r\n        } else {\r\n          menu.style.transform = `translate3d(0, ${progress}, 0)`\r\n        }\r\n        //transform: translate3d(0, 0vh, 0);\r\n      }\r\n    });\r\n  }\r\n  // функция закрытия меню\r\n  const closeMenu = () =>{\r\n    if (window.innerWidth > 574) {\r\n      menu.style.transform = `translate3d(645px, 0, 0)`\r\n    } else {\r\n      menu.style.transform = `translate3d(0, -100vh, 0)`\r\n    }\r\n  }\r\n\r\n  const openCloseList = (e) =>{\r\n    e.preventDefault()\r\n    popupRepairTypes.classList.toggle('visibility-visible')\r\n    closeMenu()\r\n  }\r\n\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', (e)=>{\r\n      e.preventDefault()\r\n        // присваиванием href то есть ссылку к какому id перейти экрану\r\n        let elmnt = document.querySelector(e.target.hash)\r\n        // экран с настройками переходт к элементу по id\r\n        elmnt.scrollIntoView({\r\n          block: \"start\",\r\n          behavior: \"smooth\"\r\n        });\r\n        if (window.innerWidth > 574) {\r\n          menu.style.transform = `translate3d(645px, 0, 0)`\r\n        } else {\r\n          menu.style.transform = `translate3d(0, -100vh, 0)`\r\n        }\r\n\r\n    })\r\n  })\r\n\r\n  // просулшивание кнопки открытия меню\r\n  menuBtn.addEventListener('click', openMneu)\r\n  // кнопка закрытия меню\r\n  menu.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('close-menu')) {\r\n      closeMenu()\r\n    }\r\n  })\r\n  // отслеживаем нажатие по документу\r\n  // close mobile-hide\r\n  document.addEventListener('click',(e) => {\r\n    if (e.target.closest('.menu-link.no-overflow') ||\r\n       (e.target.closest('.link-list.link-list-repair.mobile-hide.tablet-hide')) ||\r\n        e.target.closest('.close.mobile-hide')) {\r\n        openCloseList(e)\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu-modal.js?");

/***/ }),

/***/ "./modules/phoneMask.js":
/*!******************************!*\
  !*** ./modules/phoneMask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = (selector, masked = '+7 (___) ___-__-__') => {\r\n\tconst elems = document.querySelectorAll(selector);\r\n\tfunction mask(event) {\r\n\t\tconst keyCode = event.keyCode;\r\n\t\tconst template = masked,\r\n\t\t\tdef = template.replace(/\\D/g, \"\"),\r\n\t\t\tval = this.value.replace(/\\D/g, \"\");\r\n\t\tlet i = 0,\r\n\t\t\tnewValue = template.replace(/[_\\d]/g, function (a) {\r\n\t\t\t\treturn i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n\t\t\t});\r\n\t\ti = newValue.indexOf(\"_\");\r\n\t\tif (i !== -1) {\r\n\t\t\tnewValue = newValue.slice(0, i);\r\n\t\t}\r\n\t\tlet reg = template.substr(0, this.value.length).replace(/_+/g,\r\n\t\t\tfunction (a) {\r\n\t\t\t\treturn \"\\\\d{1,\" + a.length + \"}\";\r\n\t\t\t}).replace(/[+()]/g, \"\\\\$&\");\r\n\t\treg = new RegExp(\"^\" + reg + \"$\");\r\n\t\tif (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n\t\t\tthis.value = newValue;\r\n\t\t}\r\n\t\tif (event.type === \"blur\" && this.value.length < 5) {\r\n\t\t\tthis.value = \"\";\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tfor (const elem of elems) {\r\n\t\telem.addEventListener(\"input\", mask);\r\n\t\telem.addEventListener(\"focus\", mask);\r\n\t\telem.addEventListener(\"blur\", mask);\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/phoneMask.js?");

/***/ }),

/***/ "./modules/validateForm.js":
/*!*********************************!*\
  !*** ./modules/validateForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateForm = () =>{\r\n\r\n// валидировать номер нне нужно\r\n// он уже в маске валидируется\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\n\n//# sourceURL=webpack:///./modules/validateForm.js?");

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