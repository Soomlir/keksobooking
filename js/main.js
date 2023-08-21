import { initAdForm } from './ad-form.js';
import { initMap } from './map.js';
import { activateForms } from './toggle-page.js';
import { dataFilterOffers } from './filters.js';

initAdForm();
dataFilterOffers.then((data) => {
  const resetMap = initMap(data, activateForms);
  initAdForm(resetMap);
});
