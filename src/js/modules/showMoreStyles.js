const showMoreStyles = (trigger, parentSelector) => {
  const btn = document.querySelector(trigger);
  const parent = document.querySelector(parentSelector);

  class Styles {
    constructor({ src, title, link }) {
      this.src = src;
      this.title = title;
      this.link = link;
      this.render();
    }
    render() {
      const stylesBlock = document.createElement('div');
      stylesBlock.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1'
      );

      stylesBlock.innerHTML = `
      <div class="styles-block">
         <img src="${this.src}" alt="">
         <h4>${this.title}</h4>
         <a href="${this.link}">Подробнее</a>
		</div>
      `;
      parent.append(stylesBlock);
    }
  }

  async function getResources(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch ${url}: ${res.statusText} ${res.status}`
      );
    }

    return await res.json();
  }

  btn.addEventListener('click', () => {
    btn.classList.add('animated', 'fadeOut');
    setTimeout(() => {
      btn.remove();
    }, 350);
    getResources('assets/db.json')
      .then((res) => {
        res.styles.forEach((item) => {
          new Styles({ ...item });
        });
      })
      .catch((e) => {
        const message = document.createElement('p');
        message.classList.add('animated', 'fadeIn');
        message.style.cssText = `
        margin-top: 8rem;
        margin-bottom: 6rem;
        text-align: center;
        color: black;
        font-size: 24px;
        font-weight: 700;
        `;

        message.innerHTML =
          'Что-то пошло не так... Попробуйте обновить страницу.';

        setTimeout(() => {
          document.querySelector('#styles .container').append(message);
        }, 300);
      });
  });
};

export default showMoreStyles;
