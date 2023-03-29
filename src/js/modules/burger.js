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

export default burger;
