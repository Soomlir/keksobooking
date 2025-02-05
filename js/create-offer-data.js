import {
  MIN_LAT,
  MAX_LAT,
  MIN_LNG,
  MAX_LNG,
  COORD_PRECISION,
  MAX_PRICE,
  MAX_ROOMS,
  HOUSING_TYPES,
  TIME_CHECKS,
  FEATURES,
  PHOTOS
} from './constants.js';
import { getRandomIntNumber, getRandomFloatNumber, getRandomArrayItem, getRandomArrayFragment } from './helpers.js';

const createOfferData = (i) => {
  const index = i + 1;
  const numberWithZero = `${index < 10 ? 0 : ''}${index}`;

  const location = {
    lat: getRandomFloatNumber(MIN_LAT, MAX_LAT, COORD_PRECISION),
    lng: getRandomFloatNumber(MIN_LNG, MAX_LNG, COORD_PRECISION)
  };

  const price = getRandomIntNumber(1, MAX_PRICE);
  const rooms = getRandomIntNumber(1, MAX_ROOMS);
  const guests = getRandomIntNumber(1, 10);

  return {
    author: {
      avatar: `img/avatars/user${numberWithZero}.png`
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
      description: `Помещение с ценой ${price} ₽/ночь, количеством комнат ${rooms}, на ${guests} гостей`,
      photos: getRandomArrayFragment(PHOTOS)
    },

    location
  };
};

const getRandomOffers = (length) => Array.from({ length }, (_el, i) => createOfferData(i + 1));

export { createOfferData, getRandomOffers };
