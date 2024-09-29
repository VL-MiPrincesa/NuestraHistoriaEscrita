function validatePassword() {
    const password = document.getElementById('password-input').value;
    const correctPassword = '1'; //  contraseña 
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.getElementById('main-content');
    const passwordContainer = document.getElementById('password-container');

    if (password === correctPassword) {
        // contraseña correcta, mostrar el contenido y ocultar el formulario de contraseña
        mainContent.style.display = 'block';
        passwordContainer.style.display = 'none';
    } else {
        // mensaje de error si contraseña incorrecta
        errorMessage.style.display = 'block';
    }
}
