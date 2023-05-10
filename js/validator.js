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
const ERROR_PRICE = `Максимальное значение ${MAX_VALUE_PRICE}`;
const ERROR_CAPACITY = `Максимальное количество мест ${ROOM_NUMBERS_GUESTS['formElements.roomNumberElement.value']}`;
const ERROR_CHECK_TIMEOUT = 'Время заезда и выезда должно быть одинаковое';
const getErrorMinPrice = (value) => `Минимальная цена за ночь ${PRICE_DICTIONARY[value]}`;

const validateTitle = ({ length }) => length >= MIN_TITLE_LENGTH && length <= MAX_TITLE_LENGTH;
const validatePrice = (value) => value <= MAX_VALUE_PRICE;
const validateRoomsNumber = () =>
  ROOM_NUMBERS_GUESTS[formElements.roomNumberElement.value].includes(formElements.capacityElement.value);
const validateTypeHousing = () => formElements.typeHousingElement.value >= PRICE_DICTIONARY[formElements.priceElement.value];
const validateTimeOut = () => formElements.timeInElement.value === formElements.timeOutElement.value;

const initValidator = (formElement) => {
  const validator = new Pristine(formElement.formElement, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text'
  });

  validator.addValidator(formElements.titleElement, validateTitle, ERROR_TITLE, PRIORITY, false);
  validator.addValidator(formElements.priceElement, validatePrice, ERROR_PRICE, PRIORITY, false);
  validator.addValidator(formElements.capacityElement, validateRoomsNumber, ERROR_CAPACITY, PRIORITY, false);
  validator.addValidator(formElements.typeHousingElement, validateTypeHousing, getErrorMinPrice, PRIORITY, false);
  validator.addValidator(formElements.timeOutElement, validateTimeOut, ERROR_CHECK_TIMEOUT, PRIORITY, false);

  return validator;
};

export { initValidator };
