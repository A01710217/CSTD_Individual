const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function nivelSeguridad () {
    if (passwordInput.value >= 8) {
        document.getElementById('seguridad').innerHTML = 'Seguridad: Alta';
        alert('La contraseña es segura');
    } else {
        document.getElementById('seguridad').innerHTML = 'Seguridad: Baja';
        alert('La contraseña es insegura');
    }

}

nivelSeguridad();

function cantidadCharacters() {
    var password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
    }
}

function mayuscula() {
    var password = document.getElementById('password').value;
    var mayuscula = /[A-Z]/;
    if (!mayuscula.test(password)) {
        alert('La contraseña debe tener al menos una letra mayúscula');
    }
}

function minuscula() {
    var password = document.getElementById('password').value;
    var minuscula = /[a-z]/;
    if (!minuscula.test(password)) {
        alert('La contraseña debe tener al menos una letra minúscula');
    }
}

function numero() {
    var password = document.getElementById('password').value;
    var numero = /[0-9]/;
    if (!numero.test(password)) {
        alert('La contraseña debe tener al menos un número');
    }
}

function validar() {
    if (passwordInput.value === '' || confirmPasswordInput.value === '') {
        alert('Por favor, llene todos los campos');
    } else if(passwordInput.value === confirmPasswordInput.value) {
        alert('La contraseña coincide con la confirmación');
    } else {
        alert('La contraseña no coincide con la confirmación');
    }
}
