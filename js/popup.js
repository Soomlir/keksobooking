import { activateForms, deactivateForms } from './toggle-page.js';
import { isEscapeKeyPressed } from './helpers.js';

const popupSuccessElement = document.querySelector('#success').content.querySelector('.success');
const popupErrorElement = document.querySelector('#error').content.querySelector('.error');

const createPopup = (element) => {
  const popupElement = element.cloneNode(true);
  document.body.append(popupElement);

  deactivateForms();

  const keyCloseHandler = (evt) => {
    if (isEscapeKeyPressed(evt)) {
      // evt.preventDefault();
      closePopup();
    }
  };

  function closePopup() {
    popupElement.remove();
    document.removeEventListener('keydown', keyCloseHandler);
    activateForms();
  }

  popupElement.addEventListener('click', () => closePopup());
  document.addEventListener('keydown', keyCloseHandler);
};

export { createPopup, popupSuccessElement, popupErrorElement };
