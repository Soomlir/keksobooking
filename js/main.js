import { getRandomOffers } from './create-offer-data.js';
import { initAdForm } from './ad-form.js';
import { initMap } from './map.js';

const cardData = getRandomOffers(10);

initMap(cardData);
initAdForm();
