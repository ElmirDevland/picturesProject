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
      markType.forEach((item) => {
        item.classList.remove('hide');
        item.classList.add('show', 'animated', 'fadeIn');
      });
    } else {
      no.classList.remove('hide');
      no.classList.add('show', 'animated', 'fadeIn');
    }
  }

  menu.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach((item) => {
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

export default filter;
