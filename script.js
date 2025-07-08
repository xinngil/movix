
function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}
function irAlLogin() {
  window.location.href = 'login.html';
}
function initMap() {
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: -30.615, lng: -71.190 },
    zoom: 12,
  });
}
window.onload = initMap;
