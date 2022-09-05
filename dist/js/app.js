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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.test();\r\n\r\n\r\nconst headerBurger = document.querySelector('.header__burger')\r\nconst burgerPage = document.querySelector('.burger-page')\r\n\r\nheaderBurger.addEventListener('click', (e)=> {\r\n  burgerPage.classList.add('active')\r\n  document.body.classList.add('no-scroll')\r\n})\r\n\r\nconst burgerClose = document.querySelector('.burger-page__burger')\r\n\r\nburgerPage.addEventListener('click', (e)=> {\r\n  if (e.target.classList.contains('burger-page__burger') || e.target.classList.contains('burger-page') ) {\r\n    burgerPage.classList.remove('active')\r\n    document.body.classList.remove('no-scroll')\r\n  }\r\n})\r\n\r\nconst header = document.querySelector('.header')\r\nwindow.addEventListener('scroll', (e)=> {\r\n  console.log('SCROLLLL');\r\n  console.log(window.pageYOffset);\r\n  if (window.pageYOffset > header.clientHeight) {\r\n    header.classList.add('scroll')\r\n  } else {\r\n    header.classList.remove('scroll')\r\n  }\r\n})\r\n\r\nconst videoContainer = document.querySelector('.video-section__video')\r\nconst video = videoContainer.querySelector('video')\r\n\r\nvideoContainer.addEventListener('click', (e)=> {\r\n  if (videoContainer.classList.contains('paused')) {\r\n    video.play()\r\n  } else {\r\n    video.pause()\r\n  }\r\n  videoContainer.classList.toggle('paused')\r\n})\r\n\r\n\n\n//# sourceURL=webpack://sablon-v2/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nfunction test() {\r\n  console.log('ITS WORK');\r\n}\n\n//# sourceURL=webpack://sablon-v2/./src/js/modules/functions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;