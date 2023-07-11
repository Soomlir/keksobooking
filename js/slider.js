import { MAX_VALUE_PRICE } from './constants.js';

const getSlider = (sliderElement) => {
  const slider = noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: MAX_VALUE_PRICE,
    },
    start: 0,
    step: 10,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  });

  return slider;
};

export { getSlider };
