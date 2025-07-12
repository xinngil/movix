document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("map")) {
        var map = L.map('map').setView([-33.45694, -70.64827], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);
        L.marker([-33.45694, -70.64827]).addTo(map)
            .bindPopup('Santiago, Chile')
            .openPopup();
    }

    const rutInput = document.getElementById("rut");
    if (rutInput) {
        rutInput.addEventListener("input", () => {
            const value = rutInput.value;
            const isValid = /^\d{7,8}-[\dkK]$/.test(value);
            rutInput.style.borderColor = isValid ? "green" : "red";
        });
    }
});
