import { forms } from './toggle-page.js';
import { initValidator } from './validator.js';
import {
  ROOM_NUMBERS_GUESTS,
  PRICE_DICTIONARY,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  PRIORITY,
  MAX_VALUE_PRICE
} from './constants.js';

const formElement = forms[0].element;

const formElements = {
  formElement,
  titleElement: formElement.querySelector('#title'),
  priceElement: formElement.querySelector('#price'),
  roomNumberElement: formElement.querySelector('#room_number'),
  capacityElement: formElement.querySelector('#capacity'),
  typeHousingElement: formElement.querySelector('#type'),
  timeIn: formElement.querySelector('#timein'),
  timeOut: formElement.querySelector('#timeout')
};

const validator = initValidator(formElements);

const ERROR_TITLE = `Не менее ${MIN_TITLE_LENGTH} символов и не более ${MAX_TITLE_LENGTH} символов`;
const ERROR_PRICE = `Максимальное значение ${MAX_VALUE_PRICE}`;
const ERROR_CAPACITY = `Максимальное количество мест ${ROOM_NUMBERS_GUESTS[formElements.roomNumberElement.value]}`;
const ERROR_CHECK_TIMEOUT = 'Время заезда и выезда должно быть одинаковое';
const getErrorMinPrice = (value) => `Минимальная цена за ночь ${PRICE_DICTIONARY[value]}`;

const validateTitle = ({ length }) => length >= MIN_TITLE_LENGTH && length <= MAX_TITLE_LENGTH;
const validatePrice = (value) => value <= MAX_VALUE_PRICE;
const validateRoomsNumber = () =>
  ROOM_NUMBERS_GUESTS[formElements.roomNumberElement.value].includes(formElements.capacityElement.value);
const validateTypeHousing = (evt) => {
  formElements.priceElement.placeholder = evt.target.value;
  formElements.priceElement.value = evt.target.value;

  return formElements.priceElement.value >= PRICE_DICTIONARY[evt.target.value];
};
const validateTimeOut = () => formElements.timeIn.value === formElements.timeOut.value;

validator.addValidator(
  formElements.titleElement,
  validateTitle,
  ERROR_TITLE,
  PRIORITY,
  false
);
validator.addValidator(formElements.priceElement, validatePrice, ERROR_PRICE, PRIORITY, false);
validator.addValidator(formElements.capacityElement, validateRoomsNumber, ERROR_CAPACITY, PRIORITY, false);
validator.addValidator(formElements.typeHousingElement, validateTypeHousing, getErrorMinPrice, PRIORITY, false);
validator.addValidator(formElements.timeOut, validateTimeOut, ERROR_CHECK_TIMEOUT, PRIORITY, false);

formElements.roomNumberElement.addEventListener('change', () => validator.validate(formElements.capacityElement));
formElements.typeHousingElement.addEventListener('change', () => validator.validate(formElements.typeHousingElement));
formElements.timeIn.addEventListener('change', () => validator.validate(formElements.timeOut));
formElements.formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!validator.validate()) {
    // return;
  }
});

export { validator };
