import {
  ROOM_NUMBERS_GUESTS,
  PRICE_DICTIONARY,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  PRIORITY,
  MAX_VALUE_PRICE,
} from './constants.js';
import { formElements } from './ad-form.js';

const ERROR_TITLE = `Не менее ${MIN_TITLE_LENGTH} символов и не более ${MAX_TITLE_LENGTH} символов`;

const showErrorPrice = (value) => {
  if (value > MAX_VALUE_PRICE) {
    return `Максимальное значение - ${MAX_VALUE_PRICE}`;
  }

  return `Минимальное значение - ${PRICE_DICTIONARY[formElements.typeHousingElement.value]}`;
};

const showErrorCapacity = () => {
  const count = ROOM_NUMBERS_GUESTS[formElements.roomNumberElement.value];
  return `Максимальное количество мест ${count[count.length - 1]}`;
};

const validateTitle = ({ length }) => length >= MIN_TITLE_LENGTH && length <= MAX_TITLE_LENGTH;
const validatePrice = (value) => value >= PRICE_DICTIONARY[formElements.typeHousingElement.value] && value <= MAX_VALUE_PRICE;
const validateRoomsNumber = () =>
  ROOM_NUMBERS_GUESTS[formElements.roomNumberElement.value].includes(formElements.capacityElement.value);

const initValidator = (formElement) => {
  const validator = new Pristine(formElement.formElement, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text'
  });

  validator.addValidator(formElements.titleElement, validateTitle, ERROR_TITLE, PRIORITY, true);
  validator.addValidator(formElements.priceElement, validatePrice, showErrorPrice, PRIORITY, true);
  validator.addValidator(formElements.capacityElement, validateRoomsNumber, showErrorCapacity, PRIORITY, true);

  return validator;
};

export { initValidator };
