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

export {getRandomIntNumber, getRandomFloatNumber, getRandomArrayItem, getRandomArrayFragment};
