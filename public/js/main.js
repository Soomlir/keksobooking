const MIN_LAT = 35.65;
const MAX_LAT = 35.7;
const MIN_LNG = 139.7;
const MAX_LNG = 139.8;
const COORD_PRECISION = 5;
const MAX_PRICE = 100000;
const MAX_ROOMS = 10;

const HOUSING_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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

const createObj = (i) => {
  const index = i + 1;
  const numberWithZero = `${index < 10 ? 0 : ''}${index}`;

  const location = {
    lat: getRandomFloatNumber(MIN_LAT, MAX_LAT, COORD_PRECISION),
    lng: getRandomFloatNumber(MIN_LNG, MAX_LNG, COORD_PRECISION)
  };

  const price = getRandomIntNumber(1, MAX_PRICE);
  const rooms = getRandomIntNumber(1, MAX_ROOMS);
  const guests = getRandomIntNumber(1, 10);

  return  {
    author: {
      avatar: `img/avatars/user${numberWithZero}.png`,
    },

    offer: {
      title: `Объявление № ${index}`,
      address: `${location.lat} ${location.lng}`,
      price,
      type: getRandomArrayItem(HOUSING_TYPES),
      rooms,
      guests,
      checkin: getRandomArrayItem(TIME_CHECKS),
      checkout: getRandomArrayItem(TIME_CHECKS),
      features: getRandomArrayFragment(FEATURES),
      description: `Помещение с ценой ${price}, количеством комнат ${rooms}, на ${guests} гостей`,
      photos: getRandomArrayFragment(PHOTOS),
    },

    location
  };
};

const getRandomOffers = (length) => Array.from({ length }, (_el, i) => createObj(i + 1));

getRandomOffers(10);
