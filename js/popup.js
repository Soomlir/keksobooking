import { activateForms, deactivateForms } from './toggle-page.js';
import { isEscapeKeyPressed } from './helpers.js';

const popupSuccessElement = document.querySelector('#success').content.querySelector('.success');
const popupErrorElement = document.querySelector('#error').content.querySelector('.error');

const createPopup = (element) => {
  const popupElement = element.cloneNode(true);
  document.body.append(popupElement);

  deactivateForms();

  const closePopup = () => {
    popupElement.remove();
    activateForms();
  };

  const keyCloseHandler = (evt) => {
    if (isEscapeKeyPressed(evt)) {
      evt.preventDefault();
      closePopup();
    }
  };

  popupElement.addEventListener('click', () => closePopup());
  document.addEventListener('keydown', keyCloseHandler);
};

export { createPopup, popupSuccessElement, popupErrorElement };
