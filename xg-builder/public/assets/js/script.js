
function generarSitio() {
    const idea = document.getElementById('ideaInput').value;
    const link = document.createElement('a');
    const contenido = `<html><body><h1>Sitio generado</h1><p>${idea}</p></body></html>`;
    const blob = new Blob([contenido], { type: 'text/html' });
    link.href = URL.createObjectURL(blob);
    link.download = "sitio_generado.html";
    link.click();
}
