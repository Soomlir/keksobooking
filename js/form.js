import { initValidator } from './validator.js';
import {
  ROOM_NUMBERS_GUESTS,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_VALUE_PRICE,
  PRIORITY,
  PRICE_DICTIONARY
} from './constants.js';

const forms = ['ad-form', 'map__filters'].map((selector) => ({
  element: document.querySelector(`.${selector}`),
  disabledClass: `${selector}--disabled`
}));
const formElements = document.querySelectorAll('fieldset, select');

const toggleForms = (activate) => {
  const method = activate ? 'remove' : 'add';
  forms.forEach(({ element, disabledClass }) => {
    element.classList[method](disabledClass);
  });

  formElements.forEach((element) => element.disabled === !activate);
};

const validator = initValidator(forms);

const titleElement = forms.querySelector('#title');
const priceElement = forms.querySelector('#price');
const roomNumberElement = forms.querySelector('#room_number');
const capacityElement = forms.querySelector('#capacity');
const typeHousingElement = forms.querySelector('#type');

validator.addValidator(
  titleElement,
  ({ length }) => length >= MIN_TITLE_LENGTH && length <= MAX_TITLE_LENGTH,
  `Не менее ${MIN_TITLE_LENGTH} символов и не более ${MAX_TITLE_LENGTH} символов`,
  PRIORITY,
  false
);

validator.addValidator(
  priceElement,
  (value) => value <= MAX_VALUE_PRICE,
  `Максимальное значение ${MAX_VALUE_PRICE}`,
  PRIORITY,
  false
);

const validateCapacity = () => {
  validator.addValidator(
    capacityElement,
    () => ROOM_NUMBERS_GUESTS[roomNumberElement.value].includes(capacityElement.value),
    '',
    PRIORITY,
    false
  );
};

const validateTypeHousing = () => {
  validator.addValidator(
    priceElement,
    () => priceElement.value >= PRICE_DICTIONARY[typeHousingElement],
    '',
    PRIORITY,
    false
  );
};

roomNumberElement.addEventListener('change', validateCapacity);
typeHousingElement.addEventListener('input', validateTypeHousing);

export const activateForms = () => toggleForms(true);
export const deactivateForms = () => toggleForms(false);
