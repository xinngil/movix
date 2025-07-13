// Configuración de Firebase (SDK v8 - Compatible con tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyDYt3_RCyA4PZlH6zo-CtFJKBvjPorQG60",
  authDomain: "movix-prod.firebaseapp.com",
  databaseURL: "https://movix-prod-default-rtdb.firebaseio.com",
  projectId: "movix-prod",
  storageBucket: "movix-prod.firebasestorage.app",
  messagingSenderId: "662438290984",
  appId: "1:662438290984:web:eb852b36dac6e991ad771d"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.database();

// Escuchar cambios en 'locales'
db.ref('locales').on('value', (snapshot) => {
  const data = snapshot.val();
  console.log("Datos recibidos de Firebase:", data);
  if (window.actualizarMarcadores) {
    window.actualizarMarcadores(data); // Llama a la función en map.js
  }
});
