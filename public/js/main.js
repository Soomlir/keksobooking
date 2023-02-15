import {createOfferData} from './create-offer-data.js';

const getRandomOffers = (length) => Array.from({ length }, (_el, i) => createOfferData(i + 1));

getRandomOffers(10);
