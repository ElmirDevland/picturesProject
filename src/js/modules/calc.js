const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promocodeSelector,
  resultSelector
) => {
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
      result.textContent =
        'Для расчета нужно выбрать размер картины и материал картины';
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
export default calc;
