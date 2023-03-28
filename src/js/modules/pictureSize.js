const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector('img');

    img.classList.add('animated', 'fadeIn');
    img.src = img.src.slice(0, -4) + '-1.png';

    block
      .querySelectorAll('p:not(sizes-hit)')
      .forEach((p) => p.classList.remove('show', 'fadeIn'));
    block
      .querySelectorAll('p:not(sizes-hit)')
      .forEach((p) => p.classList.add('hide'));
  }

  function hideImg(block) {
    const img = block.querySelector('img');

    img.classList.remove('fadeIn');
    img.src = img.src.slice(0, -6) + '.png';

    block
      .querySelectorAll('p:not(sizes-hit)')
      .forEach((p) => p.classList.remove('hide'));
    block
      .querySelectorAll('p:not(sizes-hit)')
      .forEach((p) => p.classList.add('animated', 'fadeIn', 'show'));
  }

  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => showImg(block));
    block.addEventListener('mouseout', () => hideImg(block));
  });
};
export default pictureSize;
