const initValidator = ({ formElement }) => {
  const validator = new Pristine(formElement, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'ad-form__error-text'
  });

  return validator;
};

export { initValidator };
