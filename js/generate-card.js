import { HOUSING_DICTIONARY, PHOTOS } from './constants.js';
import { fillElement } from './helpers.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const generateCard = ({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);

  const titleElement = cardElement.querySelector('.popup__title');
  titleElement.textContent = offer.title;

  const addressElement = cardElement.querySelector('.popup__text--address');
  addressElement.textContent = offer.address;

  const priceElement = cardElement.querySelector('.popup__text--price');
  priceElement.textContent = `${offer.price} ₽/ночь`;

  const typeHousingElement = cardElement.querySelector('.popup__type');
  typeHousingElement.textContent = HOUSING_DICTIONARY[offer.type];

  const roomsAndGuestsElement = cardElement.querySelector('.popup__text--capacity');
  roomsAndGuestsElement.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  const timeCheckinElement = cardElement.querySelector('.popup__text--time');
  timeCheckinElement.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featuresElement = cardElement.querySelector('.popup__features');
  fillElement(
    featuresElement,
    offer.features,
    (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`
  );

  const descriptionElement = cardElement.querySelector('.popup__description');
  fillElement(descriptionElement, [offer.description]);

  const photosElement = cardElement.querySelector('.popup__photos');
  fillElement(
    photosElement,
    offer.photos,
    (photo, index) =>
      `<img src="${PHOTOS[index]}" class="popup__photo" width="45" height="40" alt="Фотография жилья" />`
  );

  const avatarUserElement = cardElement.querySelector('.popup__avatar');
  avatarUserElement.src = author.avatar;

  return cardElement;
};

export { generateCard };
