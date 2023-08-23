import { initAdForm } from './ad-form.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { activateForms } from './toggle-page.js';
import { initFilters } from './filters.js';

getData().then((data) => {
  const resetMap = initMap(data, activateForms);
  initAdForm(resetMap);
  initFilters();
});
