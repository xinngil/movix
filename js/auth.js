function logout() {
  firebase.auth().signOut().then(() => {
    alert("Sesión cerrada");
    location.reload();
  });
}
