import { forms } from './toggle-page.js';
import { initValidator } from './validator.js';
import { PRICE_DICTIONARY } from './constants.js';

const formElement = forms[0].element;

const formElements = {
  formElement,
  titleElement: formElement.querySelector('#title'),
  priceElement: formElement.querySelector('#price'),
  roomNumberElement: formElement.querySelector('#room_number'),
  capacityElement: formElement.querySelector('#capacity'),
  typeHousingElement: formElement.querySelector('#type'),
  timeInElement: formElement.querySelector('#timein'),
  timeOutElement: formElement.querySelector('#timeout')
};

const validator = initValidator(formElements);

const initAdForm = () => {
  formElements.roomNumberElement.addEventListener('change', () => {
    validator.validate(formElements.capacityElement);
  });
  formElements.typeHousingElement.addEventListener('change', () => {
    formElements.priceElement.placeholder = PRICE_DICTIONARY[formElements.typeHousingElement.value];
    formElements.priceElement.value = PRICE_DICTIONARY[formElements.typeHousingElement.value];
    validator.validate(formElements.typeHousingElement);
  });
  formElements.timeInElement.addEventListener('change', () => validator.validate(formElements.timeOut));
  formElements.formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!validator.validate()) {
      // return;
    }
  });
};

export { initAdForm, formElements };
