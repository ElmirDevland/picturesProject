const scrolling = (upSelector) => {
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
    if (document.documentElement.scrollTop > 1650) showUpBtn();
    else hideUpBtn();
  });

  const links = document.querySelectorAll('[href^="#"]');
  const speed = 0.09;

  links.forEach((link) => {
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
        let r =
          toBlock < 0
            ? Math.max(widthTop - progress / speed, widthTop + toBlock)
            : Math.min(widthTop + progress / speed, widthTop + toBlock);

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
export default scrolling;
