// import { initValidator } from './validator.js';
// import { ROOM_NUMBERS_GUESTS, PRICE_DICTIONARY } from './constants.js';

// const forms = ['ad-form', 'map__filters'].map((selector) => ({
//   element: document.querySelector(`.${selector}`),
//   disabledClass: `${selector}--disabled`
// }));
// const formElements = document.querySelectorAll('fieldset, select');

// const toggleForms = (activate) => {
//   const method = activate ? 'remove' : 'add';
//   forms.forEach(({ element, disabledClass }) => {
//     element.classList[method](disabledClass);
//   });

//   formElements.forEach((element) => element.disabled === !activate);
// };

// const validateCapacity = () => ROOM_NUMBERS_GUESTS[roomNumberElement.value].includes(capacityElement.value);


// const validateTypeHousing = (evt) => {
//   priceElement.placeholder = evt.target.value;
//   priceElement.value = evt.target.value;

//   if (priceElement.value >= PRICE_DICTIONARY[evt.target.value]) {
//     return true;
//   }

//   return false;
// };

// roomNumberElement.addEventListener('change', validateCapacity);
// typeHousingElement.addEventListener('change', validateTypeHousing);

// const validator = initValidator(forms);

// export const activateForms = () => toggleForms(true);
// export const deactivateForms = () => toggleForms(false);
// export { validateCapacity, validateTypeHousing };
