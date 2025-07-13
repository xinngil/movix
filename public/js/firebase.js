// Configura Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    databaseURL: "https://TU_PROYECTO.firebaseio.com",
    projectId: "TU_PROYECTO"
};
firebase.initializeApp(firebaseConfig);

// Ejemplo: Obtener datos de locales
const db = firebase.database();
db.ref('locales').on('value', (snapshot) => {
    const data = snapshot.val();
    console.log("Datos de Firebase:", data);
});
