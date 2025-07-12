const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "movix-123.firebaseapp.com",
    databaseURL: "https://movix-123.firebaseio.com",
    projectId: "movix-123",
    storageBucket: "movix-123.appspot.com"
};
firebase.initializeApp(firebaseConfig);

// Obtener datos de locales
const db = firebase.database();
db.ref('locales').on('value', (snapshot) => {
    const data = snapshot.val();
    // Aquí actualizas el mapa con los datos en tiempo real
});
