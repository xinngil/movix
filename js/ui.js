document.getElementById('usuarioIcono').onclick = () => {
  const panel = document.getElementById('panelUsuario');
  panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
};
document.getElementById('modoOscuro').onclick = () => {
  document.body.classList.toggle('dark-mode');
};
function procesarXG() {
  const respuesta = document.getElementById('respuestaXG').value;
  alert("XG recibió: " + respuesta + "\nFormulario personalizado pronto...");
}
