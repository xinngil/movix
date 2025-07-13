// Configuración del mapa (centrado en Chile)
const map = L.map('map').setView([-33.45694, -70.64827], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
}).addTo(map);

// Capas del mapa
const capaLocales = L.layerGroup().addTo(map);
const capaTransporte = L.layerGroup().addTo(map);
const capaHoteles = L.layerGroup().addTo(map);

// Iconos personalizados
const iconos = {
    local: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2170/2170153.png',
        iconSize: [32, 32]
    }),
    taxi: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2785/2785419.png',
        iconSize: [32, 32]
    }),
    hotel: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2589/2589904.png',
        iconSize: [32, 32]
    })
};

// Función principal para actualizar marcadores desde Firebase
function actualizarMarcadores(data) {
    // Limpiar capas antes de actualizar
    capaLocales.clearLayers();
    capaTransporte.clearLayers();
    capaHoteles.clearLayers();

    // Procesar datos de Firebase
    if (data) {
        // Locales comerciales
        if (data.locales) {
            Object.keys(data.locales).forEach(id => {
                const local = data.locales[id];
                L.marker(local.ubicacion, { icon: iconos.local })
                    .addTo(capaLocales)
                    .bindPopup(`
                        <b>${local.nombre}</b><br>
                        Tipo: ${local.tipo}<br>
                        Aforo: ${local.aforo || 'N/A'}<br>
                        <small>ID: ${id}</small>
                    `);
            });
        }

        // Transporte (taxis/colectivos)
        if (data.transporte) {
            Object.keys(data.transporte).forEach(id => {
                const vehiculo = data.transporte[id];
                L.marker(vehiculo.ubicacion, { icon: iconos.taxi })
                    .addTo(capaTransporte)
                    .bindPopup(`<b>${vehiculo.tipo}</b><br>Placa: ${vehiculo.placa}`);
            });
        }

        // Hoteles
        if (data.hoteles) {
            Object.keys(data.hoteles).forEach(id => {
                const hotel = data.hoteles[id];
                L.marker(hotel.ubicacion, { icon: iconos.hotel })
                    .addTo(capaHoteles)
                    .bindPopup(`
                        <b>${hotel.nombre}</b><br>
                        Habitaciones: ${hotel.habitaciones}<br>
                        Tel: ${hotel.telefono}
                    `);
            });
        }
    }
}

// Hacer la función accesible globalmente (para firebase.js)
window.actualizarMarcadores = actualizarMarcadores;

// Control de capas (opcional)
const capasBase = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

const capasOverlay = {
    "Locales": capaLocales,
    "Transporte": capaTransporte,
    "Hoteles": capaHoteles
};

L.control.layers(capasBase, capasOverlay).addTo(map);
