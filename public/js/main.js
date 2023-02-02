function randomNumber (min, max, count) {
  if (min < 0) {
    return false;
  }

  if (min === max) {
    return false;
  }

  const number = Math.random() * (max - min) + min;
  return number.toFixed(count);
}

randomNumber(1, 10, 1);
