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
      markType.forEach((item) => {
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

  menu.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.tagName == 'LI') {
      items.forEach((item) => {
        item.classList.remove('active');
      });
      target.classList.add('active');
    }
  });
};

export default filter;
