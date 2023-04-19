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

const activateForms = () => toggleForms(true);
const deactivateForms = () => toggleForms(false);

export { forms, activateForms, deactivateForms };
