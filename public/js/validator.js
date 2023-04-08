// import { validateCapacity, validateTypeHousing } from './form.js';
// import { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_VALUE_PRICE, PRIORITY } from './constants.js';

// const initValidator = ({dataElements}) => {
//   const validator = new Pristine(form, {
//     // TODO нужные опции
//   });

//   const titleElement = document.querySelector('#title');
//   const priceElement = document.querySelector('#price');
//   const roomNumberElement = document.querySelector('#room_number');
//   const capacityElement = document.querySelector('#capacity');
//   const typeHousingElement = document.querySelector('#type');

//   validator.addValidator(
//     titleElement,
//     ({ length }) => length >= MIN_TITLE_LENGTH && length <= MAX_TITLE_LENGTH,
//     `Не менее ${MIN_TITLE_LENGTH} символов и не более ${MAX_TITLE_LENGTH} символов`,
//     PRIORITY,
//     false
//   );

//   validator.addValidator(
//     priceElement,
//     (value) => value <= MAX_VALUE_PRICE,
//     `Максимальное значение ${MAX_VALUE_PRICE}`,
//     PRIORITY,
//     false
//   );

//   validator.addValidator(capacityElement, validateCapacity, '', PRIORITY, false);

//   validator.addValidator(priceElement, validateTypeHousing, '', PRIORITY, false);

//   return validator;
// };

// export { initValidator };
