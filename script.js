// Mapa base (ejecuta solo en index.html)
if (document.getElementById('map')) {
    const map = L.map('map').setView([-33.45694, -70.64827], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}

// Login (ejecuta solo en login.html)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Login exitoso! (simulado)');
    });
}
