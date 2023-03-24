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

  function calcPrice() {
    total = Math.round(+size.value * +material.value + +options.value);

    if (size.value === '' || material.value === '') {
      result.textContent =
        'Для расчета нужно выбрать размер картины и материал картины';
    } else if (promocode.value === 'IWANTPOPART') {
      result.textContent = total - total * 0.3 + 'руб.';
    } else {
      result.textContent = total + 'руб';
    }
  }

  size.addEventListener('change', calcPrice);
  material.addEventListener('change', calcPrice);
  options.addEventListener('change', calcPrice);
  promocode.addEventListener('input', calcPrice);

  let total = 0;
};
export default calc;
