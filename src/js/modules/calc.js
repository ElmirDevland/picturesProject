const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promocodeSelector,
  resultSelector,
  state
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
export default calc;
