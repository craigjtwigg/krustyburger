/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/krustyBurger.jpeg":
/*!*******************************!*\
  !*** ./src/krustyBurger.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dc4c9f721a82272bc02.jpeg";

/***/ }),

/***/ "./src/motherNature.jpeg":
/*!*******************************!*\
  !*** ./src/motherNature.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b3960858a041627e08f.jpeg";

/***/ }),

/***/ "./src/sideshow.jpeg":
/*!***************************!*\
  !*** ./src/sideshow.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a63f27a149d5655e0f9c.jpeg";

/***/ }),

/***/ "./src/theClogger.jpeg":
/*!*****************************!*\
  !*** ./src/theClogger.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ef96a847d2494a96b4b.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theClogger_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theClogger.jpeg */ "./src/theClogger.jpeg");
/* harmony import */ var _krustyBurger_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./krustyBurger.jpeg */ "./src/krustyBurger.jpeg");
/* harmony import */ var _sideshow_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideshow.jpeg */ "./src/sideshow.jpeg");
/* harmony import */ var _motherNature_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./motherNature.jpeg */ "./src/motherNature.jpeg");





const burgerFactory = (name, price, meal, theid, image) => {
    return {
        name: name,
        price: price,
        meal: meal,
        theid: theid,
        image: image
    }
}


const menuContent = (() => {
    const menuDiv = document.createElement("div")
    const menuHeader = document.createElement("h1")
    menuHeader.textContent = "MENU"
    menuDiv.appendChild(menuHeader)
    const _menuContent = document.createElement("div")
    _menuContent.classList.add("menuContent")

    let krustyBurger = burgerFactory("Krusty Burger", "$2", "$4", "krustyBurger", _krustyBurger_jpeg__WEBPACK_IMPORTED_MODULE_1__)
    let clogger = burgerFactory("The Clogger Burger", "$3", "$5", "theClogger", _theClogger_jpeg__WEBPACK_IMPORTED_MODULE_0__)
    let ribwich = burgerFactory("Ribwich", "$3", "$5", "ribwich") 
    let motherNature = burgerFactory("Mother Nature Burger", "$3", "$5", "motherNature", _motherNature_jpeg__WEBPACK_IMPORTED_MODULE_3__)
    let sideShow = burgerFactory("Side Show Bob Foot-Long", "£3", "$5", "sideshow", _sideshow_jpeg__WEBPACK_IMPORTED_MODULE_2__)

    
    const generateMenuItem = (item) => {
        const _itemCard = document.createElement("div")
        _itemCard.classList.add("itemCard")
        _itemCard.setAttribute("id", `${item.theid}`+"Card")
        const _itemName = document.createElement("h2")
        _itemName.classList.add(`${item.theid}`)
        _itemName.textContent = `${item.name}`
        _itemCard.appendChild(_itemName)
        const _itemImage = new Image();
        _itemImage.src = item.image;
        _itemImage.classList.add("itemImage")
        _itemCard.appendChild(_itemImage)
        const _itemPrice = document.createElement("div")
        _itemPrice.classList.add(`${item.theid}`+"Price")
        _itemPrice.textContent = "SANDWICH: " + `${item.price}` + " or MEAL: " + `${item.meal}`
        _itemCard.appendChild(_itemPrice)
        
        _menuContent.appendChild(_itemCard)

    }
    
    generateMenuItem(krustyBurger)
    generateMenuItem(clogger)
    //generateMenuItem(ribwich)
    generateMenuItem(motherNature)
    generateMenuItem(sideShow)
    
    menuDiv.appendChild(_menuContent)
    return menuDiv
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcnVzdHlidXJnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va3J1c3R5YnVyZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rcnVzdHlidXJnZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rcnVzdHlidXJnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rcnVzdHlidXJnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rcnVzdHlidXJnZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va3J1c3R5YnVyZ2VyLy4vc3JjL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDSDtBQUNFO0FBQ0Y7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0ZBQWtGLCtDQUFPO0FBQ3pGLGdGQUFnRiw2Q0FBWTtBQUM1RjtBQUNBLHlGQUF5RiwrQ0FBTztBQUNoRyxvRkFBb0YsMkNBQWE7OztBQUdqRztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DLG1EQUFtRCxXQUFXLHNCQUFzQixVQUFVO0FBQzlGOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsV0FBVyIsImZpbGUiOiJtZW51Lm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgQ2xvZ2dlckltYWdlIGZyb20gJy4vdGhlQ2xvZ2dlci5qcGVnJ1xuaW1wb3J0IEtCSW1hZ2UgZnJvbSAnLi9rcnVzdHlCdXJnZXIuanBlZydcbmltcG9ydCBGb290bG9uZ0ltYWdlIGZyb20gJy4vc2lkZXNob3cuanBlZydcbmltcG9ydCBNTkltYWdlIGZyb20gJy4vbW90aGVyTmF0dXJlLmpwZWcnXG5cbmNvbnN0IGJ1cmdlckZhY3RvcnkgPSAobmFtZSwgcHJpY2UsIG1lYWwsIHRoZWlkLCBpbWFnZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgbWVhbDogbWVhbCxcbiAgICAgICAgdGhlaWQ6IHRoZWlkLFxuICAgICAgICBpbWFnZTogaW1hZ2VcbiAgICB9XG59XG5cblxuY29uc3QgbWVudUNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1FTlVcIlxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudUhlYWRlcilcbiAgICBjb25zdCBfbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgX21lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51Q29udGVudFwiKVxuXG4gICAgbGV0IGtydXN0eUJ1cmdlciA9IGJ1cmdlckZhY3RvcnkoXCJLcnVzdHkgQnVyZ2VyXCIsIFwiJDJcIiwgXCIkNFwiLCBcImtydXN0eUJ1cmdlclwiLCBLQkltYWdlKVxuICAgIGxldCBjbG9nZ2VyID0gYnVyZ2VyRmFjdG9yeShcIlRoZSBDbG9nZ2VyIEJ1cmdlclwiLCBcIiQzXCIsIFwiJDVcIiwgXCJ0aGVDbG9nZ2VyXCIsIENsb2dnZXJJbWFnZSlcbiAgICBsZXQgcmlid2ljaCA9IGJ1cmdlckZhY3RvcnkoXCJSaWJ3aWNoXCIsIFwiJDNcIiwgXCIkNVwiLCBcInJpYndpY2hcIikgXG4gICAgbGV0IG1vdGhlck5hdHVyZSA9IGJ1cmdlckZhY3RvcnkoXCJNb3RoZXIgTmF0dXJlIEJ1cmdlclwiLCBcIiQzXCIsIFwiJDVcIiwgXCJtb3RoZXJOYXR1cmVcIiwgTU5JbWFnZSlcbiAgICBsZXQgc2lkZVNob3cgPSBidXJnZXJGYWN0b3J5KFwiU2lkZSBTaG93IEJvYiBGb290LUxvbmdcIiwgXCLCozNcIiwgXCIkNVwiLCBcInNpZGVzaG93XCIsIEZvb3Rsb25nSW1hZ2UpXG5cbiAgICBcbiAgICBjb25zdCBnZW5lcmF0ZU1lbnVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgX2l0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBfaXRlbUNhcmQuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkXCIpXG4gICAgICAgIF9pdGVtQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtLnRoZWlkfWArXCJDYXJkXCIpXG4gICAgICAgIGNvbnN0IF9pdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgICAgICBfaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChgJHtpdGVtLnRoZWlkfWApXG4gICAgICAgIF9pdGVtTmFtZS50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gXG4gICAgICAgIF9pdGVtQ2FyZC5hcHBlbmRDaGlsZChfaXRlbU5hbWUpXG4gICAgICAgIGNvbnN0IF9pdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgX2l0ZW1JbWFnZS5zcmMgPSBpdGVtLmltYWdlO1xuICAgICAgICBfaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJpdGVtSW1hZ2VcIilcbiAgICAgICAgX2l0ZW1DYXJkLmFwcGVuZENoaWxkKF9pdGVtSW1hZ2UpXG4gICAgICAgIGNvbnN0IF9pdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIF9pdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChgJHtpdGVtLnRoZWlkfWArXCJQcmljZVwiKVxuICAgICAgICBfaXRlbVByaWNlLnRleHRDb250ZW50ID0gXCJTQU5EV0lDSDogXCIgKyBgJHtpdGVtLnByaWNlfWAgKyBcIiBvciBNRUFMOiBcIiArIGAke2l0ZW0ubWVhbH1gXG4gICAgICAgIF9pdGVtQ2FyZC5hcHBlbmRDaGlsZChfaXRlbVByaWNlKVxuICAgICAgICBcbiAgICAgICAgX21lbnVDb250ZW50LmFwcGVuZENoaWxkKF9pdGVtQ2FyZClcblxuICAgIH1cbiAgICBcbiAgICBnZW5lcmF0ZU1lbnVJdGVtKGtydXN0eUJ1cmdlcilcbiAgICBnZW5lcmF0ZU1lbnVJdGVtKGNsb2dnZXIpXG4gICAgLy9nZW5lcmF0ZU1lbnVJdGVtKHJpYndpY2gpXG4gICAgZ2VuZXJhdGVNZW51SXRlbShtb3RoZXJOYXR1cmUpXG4gICAgZ2VuZXJhdGVNZW51SXRlbShzaWRlU2hvdylcbiAgICBcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKF9tZW51Q29udGVudClcbiAgICByZXR1cm4gbWVudURpdlxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29udGVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==