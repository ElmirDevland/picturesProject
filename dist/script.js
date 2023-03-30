/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (this.classList.contains('active-style')) hideAccordion();
      // ЕСЛИ АКТИВНЫЙ, ЗАКРЫТЬ.
      // ИНАЧЕ, СНАЧАЛА ЗАКРЫТЬ ПРЕДЫДУЩИЕ, ПОТОМ ПОКАЗАТЬ ТЕКУЩИЙ.
      else {
        hideAccordion();
        showAccordion(this);
      }
    });
  });
  function hideAccordion() {
    btns.forEach(elem => {
      const next = elem.nextElementSibling;
      elem.classList.remove('active-style');
      next.classList.remove('active-content');
      next.style.maxHeight = 0;
    });
  }
  function showAccordion(elem) {
    const next = elem.nextElementSibling;
    elem.classList.add('active-style');
    next.classList.add('active-content');
    next.style.maxHeight = `${next.scrollHeight + 80}px`;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerBtn = document.querySelector(burgerSelector);
  function showBurger() {
    menuElem.classList.remove('hide');
    menuElem.classList.add('show');
  }
  function hideBurger() {
    menuElem.classList.remove('show');
    menuElem.classList.add('hide');
  }
  hideBurger();
  burgerBtn.addEventListener('click', () => {
    if (menuElem.classList.contains('hide') && window.screen.availWidth < 993) {
      showBurger();
    } else {
      hideBurger();
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      hideBurger();
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector) => {
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
  }
  size.addEventListener('change', calcPrice);
  material.addEventListener('change', calcPrice);
  options.addEventListener('change', calcPrice);
  promocode.addEventListener('input', calcPrice);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");

const drop = () => {
  const fileInput = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event => {
    fileInput.forEach(input => {
      input.addEventListener(event, preventDefaults, false);
    });
  });
  ['dragenter', 'dragover'].forEach(event => {
    fileInput.forEach(input => {
      input.addEventListener(event, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(event => {
    fileInput.forEach(input => {
      input.addEventListener(event, () => unhighlight(input), false);
    });
  });
  function send(arg) {
    const status = document.createElement('p');
    const data = new FormData();
    data.append('picture', arg.files[0]);
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__["default"])('assets/designer.php', data).then(data => {
      status.style.color = 'green';
      status.textContent = 'Отправлено';
      arg.parentElement.append(status);
    }).catch(e => {
      status.style.color = 'red';
      status.textContent = 'Ошибка';
      arg.parentElement.append(status);
      console.log(e.message);
    }).finally(() => {
      setTimeout(() => {
        status.remove();
        arg.previousElementSibling.textContent = 'Файл не выбран';
      }, 2500);
    });
  }
  fileInput.forEach(item => {
    item.addEventListener('drop', e => {
      item.files = e.dataTransfer.files;
      const arr = item.files[0].name.split('.');
      const dots = arr[0].length < 7 ? '.' : '...';
      arr[0] = arr[0].length < 7 ? arr[0] : arr[0].substring(0, 7);
      item.previousElementSibling.textContent = arr.join(`${dots}`);
      if (item.hasAttribute('data-none')) {
        send(item);
      }
    });
    item.addEventListener('input', () => {
      send(item);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight(item) {
    item.closest('.file_upload').style.cssText = `
    border: 2px solid #c51abb;
    border-radius: 50px;
    padding: 5px;
    `;
  }
  function unhighlight(item) {
    item.closest('.file_upload').style.cssText = `
   border: 'none';
   padding: 0;
   `;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

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
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const no = document.querySelector('.portfolio-no');
  const items = menu.querySelectorAll('li');
  function typeFilter(markType) {
    markAll.forEach((item, i) => {
      item.classList.remove('show', 'animated', 'fadeIn');
      item.classList.add('hide');
    });
    no.classList.remove('show', 'animated', 'fadeIn');
    no.classList.add('hide');
    if (markType) {
      markType.forEach(item => {
        item.classList.remove('hide');
        item.classList.add('show', 'animated', 'fadeIn');
      });
    } else {
      no.classList.remove('hide');
      no.classList.add('show', 'animated', 'fadeIn');
    }
  }
  menu.addEventListener('click', e => {
    const target = e.target;
    if (target && target.tagName == 'LI') {
      items.forEach(item => {
        item.classList.remove('active');
      });
      target.classList.add('active');
    }
  });
  function filterRun(itemSelector) {
    const btns = menu.querySelector(itemSelector);
    const items = wrapper.querySelectorAll(itemSelector);
    btns.addEventListener('click', () => {
      items.length > 0 ? typeFilter(items) : typeFilter();
    });
  }
  filterRun('.all');
  filterRun('.lovers');
  filterRun('.chef');
  filterRun('.girl');
  filterRun('.guy');
  filterRun('.grandmother');
  filterRun('.granddad');
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
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");

const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name="upload"]');
  upload.forEach(item => {
    item.addEventListener('input', () => {
      const arr = item.files[0].name.split('.');
      const dots = arr[0].length < 7 ? '.' : '...';
      arr[0] = arr[0].length < 7 ? arr[0] : arr[0].substring(0, 7);
      item.previousElementSibling.textContent = arr.join(`${dots}`);
    });
  });
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
        const price = document.querySelector('.calc-price').textContent;
        formData.append('total-price', price);
      }
      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__["default"])(path, formData).then(data => {
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

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector('img');
    img.classList.add('animated', 'fadeIn');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.classList.remove('show', 'fadeIn');
      p.classList.add('hide');
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');
    img.classList.remove('fadeIn');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.classList.remove('hide');
      p.classList.add('animated', 'fadeIn', 'show');
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => showImg(block));
    block.addEventListener('mouseout', () => hideImg(block));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upBtn = document.querySelector(upSelector);
  function showUpBtn() {
    upBtn.classList.remove('fadeOut');
    upBtn.classList.add('animated', 'fadeIn');
  }
  function hideUpBtn() {
    upBtn.classList.remove('fadeIn');
    upBtn.classList.add('fadeOut');
  }
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) showUpBtn();else hideUpBtn();
  });
  const links = document.querySelectorAll('[href^="#"]');
  const speed = 0.09;
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let widthTop = document.documentElement.scrollTop;
      let hash = this.hash;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start;
        let r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

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

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

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
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");













window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', true, '.main-prev-btn', '.main-next-btn');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_inputsCheck__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_inputsCheck__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  (0,_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map