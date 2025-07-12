function initMap() {
  const map = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: -30.615, lng: -71.190 },
    zoom: 13,
  });

  const colectivo = new google.maps.Marker({
    position: { lat: -30.615, lng: -71.190 },
    map,
    title: "Colectivo - Juanito",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
  });

  colectivo.addListener("click", () => {
    const popup = document.getElementById("popup");
    popup.innerHTML = "<strong>🚗 Colectivo Juanito</strong><br>Ruta: Monte Patria - Carén<br>🧍‍♂️ Pasajeros: 2 / 5<br><button>Reservar</button>";
    popup.classList.add("active");
  });

  const local = new google.maps.Marker({
    position: { lat: -30.610, lng: -71.195 },
    map,
    title: "Panadería San Juan",
    icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  });

  local.addListener("click", () => {
    const popup = document.getElementById("popup");
    popup.innerHTML = "<strong>🏪 Panadería San Juan</strong><br><button>🛒 Comprar y retirar con RUT</button><br><button>Reservar hora</button>";
    popup.classList.add("active");
  });

  const camion = new google.maps.Marker({
    position: { lat: -30.620, lng: -71.185 },
    map,
    title: "Camión Ruta 5",
    icon: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
  });

  camion.addListener("click", () => {
    const popup = document.getElementById("popup");
    popup.innerHTML = "<strong>🚛 Camión Carga Pesada</strong><br>Ruta sugerida: sin túneles<br><button>Ver ruta recomendada</button>";
    popup.classList.add("active");
  });
}
window.onload = initMap;

function toggleMenu() {
  alert("Menú próximamente");
}
function goToLogin() {
  window.location.href = 'login.html';
}
function filterLayer(type) {
  alert("Filtrar por: " + type);
}
