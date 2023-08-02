import { generateCard } from './generate-card.js';
import { ICON_HEIGHT, ICON_WIDTH, ICON_POINT, FLOAT_PRECISION, LAT_TOKYO, LNG_TOKYO } from './constants.js';

const initMap = (offers, callback) => {
  const addressElement = document.querySelector('#address');
  const map = L.map('map-canvas').on('load', callback).setView(
    {
      lat: LAT_TOKYO,
      lng: LNG_TOKYO
    },
    10
  );

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [ICON_WIDTH, ICON_HEIGHT],
    iconAnchor: [ICON_POINT, ICON_HEIGHT]
  });

  const mainMarker = L.marker(
    {
      lat: LAT_TOKYO,
      lng: LNG_TOKYO
    },
    {
      draggable: true,
      icon: mainPinIcon
    }
  );
  mainMarker.addTo(map);

  mainMarker.on('moveend', (evt) => {
    const coord = evt.target.getLatLng();
    addressElement.value = `${coord.lat.toFixed(FLOAT_PRECISION)} ${coord.lng.toFixed(FLOAT_PRECISION)}`;
  });

  offers.forEach((offer) => {
    const marker = L.marker(offer.location);
    const balloon = generateCard(offer);
    marker.addTo(map).bindPopup(balloon);
  });
};

export { initMap };
