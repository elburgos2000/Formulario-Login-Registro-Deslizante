// Obtener los botones y el contenedor
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Añadir la clase 'right-panel-active' cuando se hace clic en "Registrarse"
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Quitar la clase cuando se hace clic en "Iniciar Sesión"
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});