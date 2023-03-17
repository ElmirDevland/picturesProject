'use strict';

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

    modal.forEach((modal) => {
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
    if (
      document.documentElement.clientHeight + window.pageYOffset >=
      document.documentElement.scrollHeight - 1
    ) {
      document.querySelector('.fixed-gift').click();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    trigger.forEach((btn) => {
      btn.addEventListener('click', (e) => {
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

    modal.addEventListener('click', (e) => {
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

  bindModal(
    '.button-consultation',
    '.popup-consultation',
    '.popup-consultation .popup-close'
  );

  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
};

export default modals;
