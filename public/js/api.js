import { showAlert } from './helpers.js';
import { createPopup, popupSuccessElement, popupErrorElement } from './popup.js';

const getData = () =>
  fetch('https://25.javascript.pages.academy/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin'
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return [];
    })
    .catch(() => {
      showAlert('Не удалось получить данные! Попробуйте еще раз.');
    });

const postData = (body) =>
  fetch('https://25.javascript.pages.academy/keksobooking', {
    method: 'POST',
    credentials: 'same-origin',
    body
  })
    .then((response) => {
      createPopup(response.ok ? popupSuccessElement : popupErrorElement);
      return response.ok;
    })
    .catch(() => {
      createPopup(popupErrorElement);
    });

export { getData, postData };
