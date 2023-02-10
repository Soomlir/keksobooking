function getRandomIntNumber (min, max) {
  if (min < 0) {
    min = 0;
    return min;
  }

  if (min === max) {
    return max;
  }

  const number = (Math.random() * (max - min) + min).toFixed();
  return +number;
}

function getRandomFloatNumber (min, max, count) {
  if (min < 0) {
    min = 0;
    return min;
  }

  if (min === max) {
    return min.toFixed(count);
  }

  const number = (Math.random() * (max - min) + min).toFixed(count);
  return +number;
}

getRandomIntNumber(1, 10);
getRandomFloatNumber(1, 10, 1);
