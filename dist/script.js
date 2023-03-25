/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector, state) => {
  const size = document.querySelector(sizeSelector);
  const material = document.querySelector(materialSelector);
  const options = document.querySelector(optionsSelector);
  const promocode = document.querySelector(promocodeSelector);
  const result = document.querySelector(resultSelector);
  const sendButton = document.querySelector('.calc .button-order');
  let total = 0;
  function calcPrice() {
    total = Math.round(+size.value * +material.value + +options.value);
    if (size.value === '' || material.value === '') {
      sendButton.setAttribute('disabled', true);
      sendButton.style.cssText = `
      background-image: linear-gradient(66deg, #ffffff 0%, #d7d7d7 100%);
      box-shadow: 0px 15px 30px 0px rgb(255 255 255 / 39%);
      font-size: 1.5rem;
      color: #000000;
      border: 2px solid #000000;
      background-color: transparent;
  `;
      result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    } else if (promocode.value === 'IWANTPOPART') {
      result.textContent = total - total * 0.3 + 'руб.';
    } else {
      result.textContent = total + 'руб';
      state.price = total;
      sendButton.removeAttribute('disabled');
      sendButton.style.cssText = `
          background-image: linear-gradient(66deg, #a12ab1 0%, #c818bc 100%);
          box-shadow: 0px 15px 30px 0px rgba(170, 38, 183, 0.39);
          font-size: 1.5rem;
          color: #ffffff;
          border: 2px solid #c51abb;
          background-color: transparent;
      `;
    }
    function changeState(select, props) {
      if (select === size) {
        switch (select.value) {
          case '500':
            state[props] = '40x50';
            break;
          case '650':
            state[props] = '50x70';
            break;
          case '900':
            state[props] = '70x70';
            break;
          case '1100':
            state[props] = '70x100';
            break;
          default:
            delete state[props];
            break;
        }
      }
      if (select === material) {
        switch (select.value) {
          case '1.2':
            state[props] = 'Холст из волокна';
            break;
          case '1.1':
            state[props] = 'Льняной холст';
            break;
          case '1.5':
            state[props] = 'Холст из натурального хлопка';
            break;
          default:
            delete state[props];
            break;
        }
      }
      if (select === options) {
        switch (select.value) {
          case '200':
            state[props] = 'Покрытие арт-гелем';
            break;
          case '500':
            state[props] = 'Экспресс-изготовление';
            break;
          case '100':
            state[props] = 'Доставка готовых работ';
            break;
          default:
            delete state[props];
            break;
        }
      }
    }
    changeState(size, 'size');
    changeState(material, 'material');
    changeState(options, 'options');
  }
  size.addEventListener('change', calcPrice);
  material.addEventListener('change', calcPrice);
  options.addEventListener('change', calcPrice);
  promocode.addEventListener('input', calcPrice);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = document.querySelectorAll('li');
  const btnAll = document.querySelector('.all');
  const forLovers = document.querySelector('.lovers');
  const forChef = document.querySelector('.chef');
  const forGirl = document.querySelector('.girl');
  const forGuy = document.querySelector('.guy');
  const forGrandMother = document.querySelector('.grandmother');
  const forGrandDad = document.querySelector('.granddad');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const markLovers = wrapper.querySelectorAll('.lovers');
  const markChef = wrapper.querySelectorAll('.chef');
  const markGirl = wrapper.querySelectorAll('.girl');
  const markGuy = wrapper.querySelectorAll('.guy');
  const no = document.querySelector('.portfolio-no');
  function typeFilter(markType) {
    markAll.forEach((item, i) => {
      item.classList.remove('show', 'animated', 'fadeIn');
      item.classList.add('hide');
    });
    if (markType) {
      markType.forEach(item => {
        item.classList.remove('hide');
        item.classList.add('show', 'animated', 'fadeIn');
      });
    } else {
      no.classList.remove('hide');
      no.classList.add('show', 'animated', 'fadeIn');
    }
    no.classList.add('hide');
    no.classList.remove('animated', 'fadeIn');
  }
  btnAll.addEventListener('click', () => typeFilter(markAll));
  forLovers.addEventListener('click', () => typeFilter(markLovers));
  forChef.addEventListener('click', () => typeFilter(markChef));
  forGirl.addEventListener('click', () => typeFilter(markGirl));
  forGuy.addEventListener('click', () => typeFilter(markGuy));
  forGrandMother.addEventListener('click', () => typeFilter());
  forGrandDad.addEventListener('click', () => typeFilter());
  menu.addEventListener('click', e => {
    const target = e.target;
    if (target && target.tagName == 'LI') {
      items.forEach(item => {
        item.classList.remove('active');
      });
      target.classList.add('active');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = state => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name="upload"]');
  upload.forEach(item => {
    item.addEventListener('input', () => {
      const arr = item.files[0].name.split('.');
      const dots = arr[0].length < 7 ? '.' : '...';
      arr[0] = arr[0].length < 7 ? arr[0] : arr[0].substring(0, 7);
      item.previousElementSibling.textContent = arr.join(`${dots}`);
      console.log(arr);
    });
  });
  const postData = async (url, body) => {
    const req = await fetch(url, {
      method: 'POST',
      body: body
    });
    if (!req.ok) {
      throw new Error(`Failed to fetch ${url}: ${req.statusText} ${req.status}`);
    }
    return await req.text();
  };
  const statusMessage = {
    loading: 'Идёт отправка',
    success: 'Отправлено',
    failure: 'Ошибка',
    load: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const path = form.closest('.popup-design') || form.classList.contains('form_calc') ? 'assets/designer.php' : 'assets/question.php';
      const status = document.createElement('div');
      status.classList.add('status_notice');
      function showStatusMessage(message, img) {
        status.innerHTML = `
            <img src="${img}">
            <p>${message}</p>
        `;
      }
      showStatusMessage(statusMessage.loading, statusMessage.load);
      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.classList.remove('show');
        form.classList.add('hide');
        form.parentNode.append(status);
      }, 450);
      const formData = new FormData(form);
      if (form.hasAttribute('data-form-calc')) {
        for (const key in state) {
          formData.append(key, state[key]);
        }
      }
      postData(path, formData).then(data => {
        console.log(data);
        showStatusMessage(statusMessage.success, statusMessage.ok);
        status.style.color = 'green';
      }).catch(error => {
        showStatusMessage(statusMessage.failure, statusMessage.fail);
        status.style.color = 'red';
        console.log(error);
      }).finally(() => {
        inputs.forEach(input => {
          input.value = '';
          input.checked = false;
        });
        upload.forEach(input => {
          input.previousElementSibling.textContent = 'Файл не выбран';
        });
        for (const key in state) {
          delete state[key];
        }
        setTimeout(() => {
          status.remove();
          form.classList.remove('hide', 'fadeOutUp');
          form.classList.add('show');
          document.querySelectorAll('.popup-close').forEach(btn => btn.click());
          setTimeout(() => {
            form.classList.remove('animated', 'fadeInDown');
          }, 450);
        }, 3000);
      });
    });
  }
  forms.forEach(form => {
    bindPostData(form);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/inputsCheck.js":
/*!***************************************!*\
  !*** ./src/js/modules/inputsCheck.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const inputsCheck = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9 \!\"\;\:\?\_\-\,\.]/gi)) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', e => {
      input.value = input.value.replace(/[^а-яё 0-9 \!\"\;\:\?\_\-\,\.]/gi, '');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputsCheck);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  function setCursorPosition(pos, elem) {
    elem.setSelectionRange(pos, pos);
    elem.focus();
  }
  function createMask(event) {
    const matrix = '+7 (___) ___ __ __';
    const def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');
    let i = 0;
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('keypress', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

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

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showMoreStyles = (trigger, parentSelector) => {
  const btn = document.querySelector(trigger);
  const parent = document.querySelector(parentSelector);
  class Styles {
    constructor(_ref) {
      let {
        src,
        title,
        link
      } = _ref;
      this.src = src;
      this.title = title;
      this.link = link;
      this.render();
    }
    render() {
      const stylesBlock = document.createElement('div');
      stylesBlock.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      stylesBlock.innerHTML = `
      <div class="styles-block">
         <img src="${this.src}" alt="">
         <h4>${this.title}</h4>
         <a href="${this.link}">Подробнее</a>
		</div>
      `;
      parent.append(stylesBlock);
    }
  }
  async function getResources(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.statusText} ${res.status}`);
    }
    return await res.json();
  }
  btn.addEventListener('click', () => {
    btn.classList.add('animated', 'fadeOut');
    setTimeout(() => {
      btn.remove();
    }, 350);
    getResources('assets/db.json').then(res => {
      res.styles.forEach(item => {
        new Styles({
          ...item
        });
      });
    }).catch(e => {
      const message = document.createElement('p');
      message.classList.add('animated', 'fadeIn');
      message.style.cssText = `
        margin-top: 8rem;
        margin-bottom: 6rem;
        text-align: center;
        color: black;
        font-size: 24px;
        font-weight: 700;
        `;
      message.innerHTML = 'Что-то пошло не так... Попробуйте обновить страницу.';
      setTimeout(() => {
        document.querySelector('#styles .container').append(message);
      }, 300);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_inputsCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/inputsCheck */ "./src/js/modules/inputsCheck.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");








window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const formState = {};
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(formState);
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_inputsCheck__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_inputsCheck__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price', formState);
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map