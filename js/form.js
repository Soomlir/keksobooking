import { initValidator } from './validator.js';
import { ROOM_NUMBERS_GUESTS, PRICE_DICTIONARY } from './constants.js';

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

const titleElement = document.querySelector('#title');
const priceElement = document.querySelector('#price');
const roomNumberElement = document.querySelector('#room_number');
const capacityElement = document.querySelector('#capacity');
const typeHousingElement = document.querySelector('#type');

const dataElements = {
  forms: forms,
  titleElement: titleElement,
  priceElement: priceElement,
  roomNumberElement: roomNumberElement,
  capacityElement: capacityElement,
  typeHousingElement: typeHousingElement
};

const validateCapacity = () => ROOM_NUMBERS_GUESTS[roomNumberElement.value].includes(capacityElement.value);

const validateTypeHousing = (evt) => {
  priceElement.placeholder = evt.target.value;
  priceElement.value = evt.target.value;

  if (priceElement.value >= PRICE_DICTIONARY[evt.target.value]) {
    return true;
  }

  return false;
};

roomNumberElement.addEventListener('change', validateCapacity);
typeHousingElement.addEventListener('change', validateTypeHousing);

initValidator(dataElements);

export const activateForms = () => toggleForms(true);
export const deactivateForms = () => toggleForms(false);
export { validateCapacity, validateTypeHousing };
