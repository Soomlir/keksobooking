const MIN_LAT = 35.65;
const MAX_LAT = 35.7;
const MIN_LNG = 139.7;
const MAX_LNG = 139.8;
const COORD_PRECISION = 5;
const MAX_PRICE = 100000;
const MAX_ROOMS = 10;

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_VALUE_PRICE = 100000;
const PRIORITY = 1000;

const ICON_WIDTH = 52;
const ICON_HEIGHT = 52;
const ICON_POINT = 26;
const FLOAT_PRECISION = 5;

const ALERT_DELAY = 5000;

const LAT_TOKYO = 35.6894875;
const LNG_TOKYO = 139.6917064;

const ESC_KEY = 'Escape';

const HOUSING_TYPES = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const HOUSING_MIN_PRICE = ['0', '1000', '3000', '5000', '10000'];
const HOUSING_DICTIONARY = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const TIME_CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const ROOM_NUMBERS_GUESTS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const PRICE_DICTIONARY = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000
};

export {
  ALERT_DELAY,
  COORD_PRECISION,
  ESC_KEY,
  FEATURES,
  FLOAT_PRECISION,
  MIN_LAT,
  MAX_LAT,
  MIN_LNG,
  MAX_LNG,
  MAX_PRICE,
  MAX_ROOMS,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_VALUE_PRICE,
  LAT_TOKYO,
  LNG_TOKYO,
  HOUSING_TYPES,
  HOUSING_MIN_PRICE,
  HOUSING_DICTIONARY,
  TIME_CHECKS,
  PRIORITY,
  PRICE_DICTIONARY,
  PHOTOS,
  ROOM_NUMBERS_GUESTS,
  ICON_WIDTH,
  ICON_HEIGHT,
  ICON_POINT,
};
