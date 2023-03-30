import postData from '../services/services';

const drop = () => {
  const fileInput = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((event) => {
    fileInput.forEach((input) => {
      input.addEventListener(event, preventDefaults, false);
    });
  });

  ['dragenter', 'dragover'].forEach((event) => {
    fileInput.forEach((input) => {
      input.addEventListener(event, () => highlight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach((event) => {
    fileInput.forEach((input) => {
      input.addEventListener(event, () => unhighlight(input), false);
    });
  });

  function send(arg) {
    const status = document.createElement('p');
    const data = new FormData();
    data.append('picture', arg.files[0]);

    postData('assets/designer.php', data)
      .then((data) => {
        status.style.color = 'green';
        status.textContent = 'Отправлено';
        arg.parentElement.append(status);
      })
      .catch((e) => {
        status.style.color = 'red';
        status.textContent = 'Ошибка';
        arg.parentElement.append(status);
        console.log(e.message);
      })
      .finally(() => {
        setTimeout(() => {
          status.remove();
          arg.previousElementSibling.textContent = 'Файл не выбран';
        }, 2500);
      });
  }

  fileInput.forEach((item) => {
    item.addEventListener('drop', (e) => {
      item.files = e.dataTransfer.files;

      const arr = item.files[0].name.split('.');
      const dots = arr[0].length < 7 ? '.' : '...';
      arr[0] = arr[0].length < 7 ? arr[0] : arr[0].substring(0, 7);
      item.previousElementSibling.textContent = arr.join(`${dots}`);

      if (item.hasAttribute('data-none')) {
        send(item);
      }
    });

    item.addEventListener('input', () => {
      send(item);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.cssText = `
    border: 2px solid #c51abb;
    border-radius: 50px;
    padding: 5px;
    `;
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.cssText = `
   border: 'none';
   padding: 0;
   `;
  }
};
export default drop;
