/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const modals = () => {
  function calcScroll() {
    const div = document.createElement('div');
    div.style.cssText = `
      width: 50px;
      height: 50px;
      overflow-y: scroll;
      visibility: hidden;
    `;
    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  const scroll = calcScroll();
  function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('hide');
    modal.classList.add('animated', 'fadeIn', 'show');
    document.body.classList.add('modal-open');
    document.body.style.marginRight = `${scroll}px`;
    if (document.querySelector('.fixed-gift')) {
      document.querySelector('.fixed-gift').style.marginRight = `${scroll}px`;
    }
    clearTimeout(timerId);
    window.removeEventListener('scroll', showModalByScroll);
  }
  function closeModal(modalSelector) {
    const modal = document.querySelectorAll(modalSelector);
    modal.forEach(modal => {
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = '0px';
      if (document.querySelector('.fixed-gift')) {
        document.querySelector('.fixed-gift').style.marginRight = '0px';
      }
      modal.classList.remove('show');
      modal.classList.add('hide');
    });
  }
  function showModalByScroll() {
    if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight - 1) {
      document.querySelector('.fixed-gift').click();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    trigger.forEach(btn => {
      btn.addEventListener('click', e => {
        const target = e.target;
        if (target) {
          e.preventDefault();
          openModal(modalSelector);
        }
        if (destroy) {
          btn.remove();
        }
      });
    });
    close.addEventListener('click', () => {
      closeModal(modalSelector);
    });
    modal.addEventListener('click', e => {
      const target = e.target;
      if (target === modal) {
        closeModal(modalSelector);
      }
    });
  }
  const timerId = setTimeout(() => {
    openModal('.popup-consultation');
  }, 61000);
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = function (slidesSelector) {
  let horizontal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let prev = arguments.length > 2 ? arguments[2] : undefined;
  let next = arguments.length > 3 ? arguments[3] : undefined;
  const slides = document.querySelectorAll(slidesSelector);
  let slideIndex = 1;
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(item => {
      item.classList.remove('show');
      item.classList.add('hide', 'animated');
    });
    slides[slideIndex - 1].classList.remove('hide');
    if (!horizontal) {
      slides[slideIndex - 1].classList.add('show', 'slideInDown');
    }
  }
  showSlides(slideIndex);
  function plusSlide(n) {
    showSlides(slideIndex += n);
  }
  function startAnimation(remove, add) {
    slides[slideIndex - 1].classList.remove('show', remove);
    slides[slideIndex - 1].classList.add('show', add);
  }
  slides[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(timerId);
  });
  slides[0].parentNode.addEventListener('mouseleave', () => {
    timerId = setInterval(() => {
      plusSlide(1);
      if (horizontal) {
        startAnimation('slideInLeft', 'slideInRight');
      }
    }, 5000);
  });
  if (prev && next) {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    nextBtn.addEventListener('click', () => {
      plusSlide(1);
      startAnimation('slideInRight', 'slideInLeft');
    });
    prevBtn.addEventListener('click', () => {
      plusSlide(-1);
      startAnimation('slideInLeft', 'slideInRight');
    });
  }
  let timerId = setInterval(() => {
    plusSlide(1);
    if (horizontal) {
      startAnimation('slideInLeft', 'slideInRight');
    }
  }, 5000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map