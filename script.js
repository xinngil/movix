// Mapa
if (document.getElementById('map')) {
    const map = L.map('map').setView([-33.45694, -70.64827], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-33.45694, -70.64827]).addTo(map).bindPopup("¡Movix funciona!");
}

// Login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const rut = e.target[0].value;
        alert(/^[0-9]{7,8}-[0-9kK]$/.test(rut) ? "✅ RUT válido" : "❌ RUT inválido");
    });
}
