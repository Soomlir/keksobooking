import { ALERT_DELAY, ESC_KEY, FLOAT_PRECISION } from './constants.js';

const DELAY = 500;

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

const getFixed = (value) => value.toFixed(FLOAT_PRECISION);
const stringifyCoord = ({ lat, lng }) => [lat, lng].map(getFixed).join(' ');

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

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

const debounce = (callback, timeoutDelay = DELAY) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle

const throttle = (callback, delayBetweenFrames) => {
  // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
  // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
  let lastTime = 0;

  return (...rest) => {
    // Получаем текущую дату в миллисекундах,
    // чтобы можно было в дальнейшем
    // вычислять разницу между кадрами
    const now = new Date();

    // Если время между кадрами больше задержки,
    // вызываем наш колбэк и перезаписываем lastTime
    // временем "последнего кадра"
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {
  getRandomIntNumber,
  getRandomFloatNumber,
  getRandomArrayItem,
  getRandomArrayFragment,
  fillElement,
  showAlert,
  getFixed,
  stringifyCoord,
  debounce,
  throttle
};
