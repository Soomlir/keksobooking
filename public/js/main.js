import { initAdForm } from './ad-form.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { activateForms } from './toggle-page.js';
import { initFilters } from './filters.js';
import { previewAvatar, previewHousing } from './image-control.js';

previewAvatar();
previewHousing();

getData().then((data) => {
  const resetMap = initMap(data, activateForms);
  initAdForm(resetMap);
  initFilters();
});
