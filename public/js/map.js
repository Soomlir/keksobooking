// import { generateCard } from './generate-card.js';
// import { ICON_HEIGHT, ICON_WIDTH, ICON_POINT, LAT_TOKYO, LNG_TOKYO } from './constants.js';
// import { getFixed } from './helpers.js';

// const DEFAULT_LOCATION = {
//   lat: LAT_TOKYO,
//   lng: LNG_TOKYO
// };

// const initMap = (offers, callback) => {
//   const addressElement = document.querySelector('#address');
//   const map = L.map('map-canvas').on('load', callback).setView(DEFAULT_LOCATION, 10);

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);

//   const mainPinIcon = L.icon({
//     iconUrl: './img/main-pin.svg',
//     iconSize: [ICON_WIDTH, ICON_HEIGHT],
//     iconAnchor: [ICON_POINT, ICON_HEIGHT]
//   });

//   const mainMarker = L.marker(DEFAULT_LOCATION, {
//     draggable: true,
//     icon: mainPinIcon
//   });
//   mainMarker.addTo(map);

//   mainMarker.on('moveend', (evt) => {
//     const coord = evt.target.getLatLng();
//     addressElement.value = `${getFixed(coord.lat)} ${getFixed(coord.lng)}`;
//   });

//   const balloons = offers.map((offer) => {
//     const marker = L.marker(offer.location);
//     const balloon = generateCard(offer);
//     return marker.addTo(map).bindPopup(balloon);
//   });

//   const resetMap = (resetCallback) => {
//     map.setView(DEFAULT_LOCATION);

//     mainMarker.setLatLng({
//       DEFAULT_LOCATION
//     });
//     // console.log(balloons);
//     balloons.forEach((element) => {
//       element.remove();
//     });
//   };

//   return resetMap;
// };

// export { initMap };
