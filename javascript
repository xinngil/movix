// Mapa centrado en Chile
const map = L.map('map').setView([-33.45694, -70.64827], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([-33.45694, -70.64827]).addTo(map).bindPopup("¡Movix funciona!");
