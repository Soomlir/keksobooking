import { activateForms } from './toggle-page.js';
import { generateCard } from './generate-card.js';

const iconWidth = 52;
const iconHeight = 52;
const iconPoint = 26;
const floatCoordinate = 5;

const initMap = (cards) => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activateForms();
    })
    .setView({
      lat: 35.6894875,
      lng: 139.6917064,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);


  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [iconWidth, iconHeight],
    iconAnchor: [iconPoint, iconHeight]
  });

  const mainMarker = L.marker(
    {
      lat: 35.6894875,
      lng: 139.6917064,
    },
    {
      draggable: true,
      icon: mainPinIcon
    }
  );
  mainMarker.addTo(map);

  const addressCoordinates = document.querySelector('#address');

  mainMarker.on('moveend', (evt) => {
    const coord  = evt.target.getLatLng();
    addressCoordinates.value = `${+coord.lat.toFixed(floatCoordinate)} ${+coord.lng.toFixed(floatCoordinate)}`;
  });

  cards.forEach((elem) => {
    const {lat, lng} = elem.location;
    const balloon = generateCard(elem);
    const marker = L.marker({
      lat,
      lng,
    });

    marker.addTo(map).bindPopup(balloon);
  });

};

export { initMap };
