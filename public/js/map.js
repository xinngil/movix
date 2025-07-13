// Mapa centrado en Chile
const map = L.map('map').setView([-33.45694, -70.64827], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Capas
const localesLayer = L.layerGroup().addTo(map);
const iconoLocal = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2170/2170153.png',
    iconSize: [30, 30]
});

// Marcador de ejemplo (luego se reemplazará con datos de Firebase)
L.marker([-33.45694, -70.64827], { icon: iconoLocal })
    .addTo(localesLayer)
    .bindPopup("<b>Cosmética Bella</b><br>Aforo: 15/20");
