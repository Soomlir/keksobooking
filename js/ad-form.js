import { forms } from './toggle-page.js';
import { initValidator } from './validator.js';
import { PRICE_DICTIONARY } from './constants.js';
import { getSlider } from './slider.js';

const formElement = forms[0].element;

const formElements = {
  formElement,
  titleElement: formElement.querySelector('#title'),
  priceElement: formElement.querySelector('#price'),
  roomNumberElement: formElement.querySelector('#room_number'),
  capacityElement: formElement.querySelector('#capacity'),
  typeHousingElement: formElement.querySelector('#type'),
  timeInElement: formElement.querySelector('#timein'),
  timeOutElement: formElement.querySelector('#timeout'),
  sliderElement: formElement.querySelector('.ad-form__slider')
};

const slider = getSlider(formElements.sliderElement);

const validator = initValidator(formElements);

const initAdForm = () => {
  formElements.roomNumberElement.addEventListener('change', () => {
    validator.validate(formElements.capacityElement);
  });

  formElements.typeHousingElement.addEventListener('change', () => {
    formElements.priceElement.placeholder = PRICE_DICTIONARY[formElements.typeHousingElement.value];
    validator.validate(formElements.priceElement);
  });

  formElements.timeInElement.addEventListener('change', () => {
    formElements.timeOutElement.value = formElements.timeInElement.value;
  });

  formElements.priceElement.addEventListener('input', () => {
    if (validator.validate(formElements.priceElement)) {
      slider.set(parseInt(formElements.priceElement.value, 10));
    }
  });

  formElements.timeOutElement.addEventListener('change', () => {
    formElements.timeInElement.value = formElements.timeOutElement.value;
  });

  formElements.formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!validator.validate()) {
      // return;
    }
  });
};

slider.on('slide', () => {
  formElements.priceElement.value = slider.get();
});

export { initAdForm, formElements };
