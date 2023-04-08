// import { form } from './form.js';

const initValidator = ({ formElement }) => {
  const validator = new Pristine(formElement, {
    // TODO нужные опции
  });

  return validator;
};

export { initValidator };
