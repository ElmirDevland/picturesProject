const forms = (state) => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name="upload"]');

  upload.forEach((item) => {
    item.addEventListener('input', () => {
      const arr = item.files[0].name.split('.');
      const dots = arr[0].length < 7 ? '.' : '...';
      arr[0] = arr[0].length < 7 ? arr[0] : arr[0].substring(0, 7);

      item.previousElementSibling.textContent = arr.join(`${dots}`);

      console.log(arr);
    });
  });

  const postData = async (url, body) => {
    const req = await fetch(url, {
      method: 'POST',
      body: body,
    });

    if (!req.ok) {
      throw new Error(
        `Failed to fetch ${url}: ${req.statusText} ${req.status}`
      );
    }

    return await req.text();
  };

  const statusMessage = {
    loading: 'Идёт отправка',
    success: 'Отправлено',
    failure: 'Ошибка',
    load: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const path =
        form.closest('.popup-design') || form.classList.contains('form_calc')
          ? 'assets/designer.php'
          : 'assets/question.php';

      const status = document.createElement('div');
      status.classList.add('status_notice');

      function showStatusMessage(message, img) {
        status.innerHTML = `
            <img src="${img}">
            <p>${message}</p>
        `;
      }

      showStatusMessage(statusMessage.loading, statusMessage.load);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.classList.remove('show');
        form.classList.add('hide');
        form.parentNode.append(status);
      }, 450);

      const formData = new FormData(form);

      if (form.hasAttribute('data-form-calc')) {
        for (const key in state) {
          formData.append(key, state[key]);
        }
      }

      postData(path, formData)
        .then((data) => {
          console.log(data);
          showStatusMessage(statusMessage.success, statusMessage.ok);
          status.style.color = 'green';
        })
        .catch((error) => {
          showStatusMessage(statusMessage.failure, statusMessage.fail);
          status.style.color = 'red';
          console.log(error);
        })
        .finally(() => {
          inputs.forEach((input) => {
            input.value = '';
            input.checked = false;
          });

          upload.forEach((input) => {
            input.previousElementSibling.textContent = 'Файл не выбран';
          });

          for (const key in state) {
            delete state[key];
          }

          setTimeout(() => {
            status.remove();
            form.classList.remove('hide', 'fadeOutUp');
            form.classList.add('show');
            document
              .querySelectorAll('.popup-close')
              .forEach((btn) => btn.click());

            setTimeout(() => {
              form.classList.remove('animated', 'fadeInDown');
            }, 450);
          }, 3000);
        });
    });
  }

  forms.forEach((form) => {
    bindPostData(form);
  });
};
export default forms;
