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

const createObj = (i) => {
  const index = i + 1;
  const numberWithZero = `${index < 10 ? 0 : ''}${index}`;

  const MIN_LAT = 35.65;
  const MAX_LAT = 35.7;
  const MIN_LNG = 139.7;
  const MAX_LNG = 139.8;
  const COORD_PRECISION = 5;

  const maxPrice = 20000;
  const PRICE = getRandomIntNumber(1, maxPrice);
  const maxRooms = 7;
  const ROOMS = getRandomIntNumber(1, maxRooms);
  const GUESTS = getRandomIntNumber(1, 10);

  const typeOfHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const TYPE = typeOfHousing[getRandomIntNumber(0, typeOfHousing.length)];

  const timeCheck = ['12:00', '13:00', '14:00'];
  const CHECKIN = timeCheck[getRandomIntNumber(0, timeCheck.length)];
  const CHECKOUT = timeCheck[getRandomIntNumber(0, timeCheck.length)];

  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  const obj =  {
    author: {
      avatar: `img/avatars/user${numberWithZero}.png`,
    },

    offer: {
      title: 1,
      address: `${location.lat} ${location.lng}`,
      price: PRICE,
      type: TYPE,
      rooms: ROOMS,
      guests: GUESTS,
      checkin: CHECKIN,
      checkout: CHECKOUT,
      features: features,
      description: 1,
      photos: 1,
    },

    location: {
      lat: getRandomFloatNumber(MIN_LAT, MAX_LAT, COORD_PRECISION),
      lng: getRandomFloatNumber(MIN_LNG, MAX_LNG, COORD_PRECISION)
    }
  };

  return obj;
};

const getRandomOffers = (length) => Array.from({ length }, (_el, i) => createObj(i + 1));

getRandomOffers();
