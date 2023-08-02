import { initAdForm } from './ad-form.js';
import { getData } from './api.js';
import { initMap } from './map.js';
import { activateForms } from './toggle-page.js';

initAdForm();
getData().then((data) => {
  initMap(data, activateForms);
});
