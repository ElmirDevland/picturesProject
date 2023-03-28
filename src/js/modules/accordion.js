const accordion = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach((btn) => {
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
    btns.forEach((elem) => {
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
export default accordion;
