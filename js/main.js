import { getRandomOffers } from './create-offer-data.js';
import { generateCard } from './generate-card.js';
// import { initValidator } from './validator.js';

const mapElement = document.querySelector('#map-canvas');
const [cardData] = getRandomOffers(1);

mapElement.append(generateCard(cardData));
