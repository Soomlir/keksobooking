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

const HOUSING_TYPES = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const HOUSING_MIN_PRICE = ['0', '1000', '3000', '5000', '10000'];
const TIME_CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const FEATURES_DICTIONARY = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

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
  MIN_LAT,
  MAX_LAT,
  MIN_LNG,
  MAX_LNG,
  COORD_PRECISION,
  MAX_PRICE,
  MAX_ROOMS,
  HOUSING_TYPES,
  HOUSING_MIN_PRICE,
  TIME_CHECKS,
  FEATURES,
  FEATURES_DICTIONARY,
  PHOTOS,
  ROOM_NUMBERS_GUESTS,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_VALUE_PRICE,
  PRIORITY,
  PRICE_DICTIONARY
};
