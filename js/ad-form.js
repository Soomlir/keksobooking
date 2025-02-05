import { forms } from './toggle-page.js';
import { initValidator } from './validator.js';
import { PRICE_DICTIONARY } from './constants.js';
import { getSlider } from './slider.js';
import { postData } from './api.js';
import { initImagePreview } from './image-control.js';
import { clearFilters } from './filters.js';


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
  sliderElement: formElement.querySelector('.ad-form__slider'),
  buttonElement: formElement.querySelector('.ad-form__submit'),
  avatarElement: formElement.querySelector('.ad-form-header__input'),
  avatarPreviewElement: formElement.querySelector('.ad-form-header__preview img'),
  housingPhotoElement: formElement.querySelector('#images'),
  housingPreviewElement: formElement.querySelector('.ad-form__photo')
};

const resetAvatarPreview = initImagePreview(formElements.avatarElement, formElements.avatarPreviewElement);
const resetOfferImagePreview = initImagePreview(formElements.housingPhotoElement, formElements.housingPreviewElement);

const slider = getSlider(formElements.sliderElement);
const validator = initValidator(formElements);

const initAdForm = (resetMap) => {
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
      return;
    }

    formElements.buttonElement.disabled = true;
    postData(new FormData(formElement)).then(() => {
      formElements.buttonElement.disabled = false;
      formElement.reset();
    });
  });

  formElements.formElement.addEventListener('reset', () => {
    slider.set(parseInt(formElements.priceElement.min, 10));
    validator.reset();
    resetMap();
    clearFilters();
    resetAvatarPreview();
    resetOfferImagePreview();
  });
};

slider.on('slide', () => {
  formElements.priceElement.value = slider.get();
});

export { initAdForm, formElements };
