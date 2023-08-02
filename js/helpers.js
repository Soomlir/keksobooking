import { ALERT_DELAY, ESC_KEY } from './constants.js';

const getRandomIntNumber = (min, max) => {
  if (min === max) {
    return max;
  }

  if (min < 0) {
    min = 0;
  }

  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomFloatNumber = (min, max, count) => {
  if (min === max) {
    return min.toFixed(count);
  }

  if (min < 0) {
    min = 0;
  }

  return (Math.random() * (max - min) + min).toFixed(count);
};

const getRandomArrayItem = (arr) => arr[getRandomIntNumber(0, arr.length)];

const getRandomArrayFragment = (arr) => {
  const arrStart = getRandomIntNumber(0, arr.length);
  const arrEnd = getRandomIntNumber(0, arr.length);

  return arr.slice(arrStart, arrEnd);
};

const fillElement = (element, data = [], callback = (item) => item) => {
  if (data.length && data.some((item) => item)) {
    element.innerHTML = data.map(callback).join();
  } else {
    element.remove();
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_DELAY);
};

export const isEscapeKeyPressed = (evt) => evt.key === ESC_KEY;

export { getRandomIntNumber, getRandomFloatNumber, getRandomArrayItem, getRandomArrayFragment, fillElement, showAlert };
