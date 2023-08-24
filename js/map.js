import { generateCard } from './generate-card.js';
import { ICON_HEIGHT, ICON_WIDTH, ICON_POINT, LAT_TOKYO, LNG_TOKYO } from './constants.js';
import { getFixed } from './helpers.js';

const ZOOM = 10;
const DEFAULT_LIMIT = 10;

const DEFAULT_LOCATION = {
  lat: LAT_TOKYO,
  lng: LNG_TOKYO
};

let map = null;
let markerGroup = null;

const renderPins = (offers, limit = DEFAULT_LIMIT) => {
  if (!map) {
    return;
  }

  markerGroup.clearLayers();
  offers.slice(0, limit).forEach((offer) => {
    const marker = L.marker(offer.location);
    const balloon = generateCard(offer);
    marker.addTo(markerGroup).bindPopup(balloon);
  });
};

const initMap = (offers, callback) => {
  const addressElement = document.querySelector('#address');
  map = L.map('map-canvas').on('load', callback).setView(DEFAULT_LOCATION, 10);
  markerGroup = L.layerGroup().addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [ICON_WIDTH, ICON_HEIGHT],
    iconAnchor: [ICON_POINT, ICON_HEIGHT]
  });

  const mainMarker = L.marker(DEFAULT_LOCATION, {
    draggable: true,
    icon: mainPinIcon
  });
  mainMarker.addTo(map);

  mainMarker.on('moveend', (evt) => {
    const coord = evt.target.getLatLng();
    addressElement.value = `${getFixed(coord.lat)} ${getFixed(coord.lng)}`;
  });

  renderPins(offers, 10);

  const resetMap = () => {
    mainMarker.setLatLng(DEFAULT_LOCATION);
    map.closePopup().setView(DEFAULT_LOCATION, ZOOM);
  };

  return resetMap;
};

export { initMap, renderPins };
