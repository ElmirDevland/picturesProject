const sliders = (slidesSelector, horizontal = false, prev, next) => {
  const slides = document.querySelectorAll(slidesSelector);

  let slideIndex = 1;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => {
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
    showSlides((slideIndex += n));
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
export default sliders;
