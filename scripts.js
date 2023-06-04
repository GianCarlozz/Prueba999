//1) Guardamos una referencia para cada elemento, lo obtendremos por su verificación
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//2) Agregamos un error sin evento dentro del evento envio
form.addEventListener('submit', e => {
    e.preventDefault(); //Hace que el form no se envíe

    validateInputs(); //Validamos nuestras entradas
});
//4) Verificamos si es una cadena vacía o si tiene algún valor
//Si está vacío estableceremos un error
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

//5) Creamos un elemento como parámetro, obtendremos su elem principal
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//6) Validamos el correo
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//3) Creamos una función de validación de entradas
const validateInputs = () => {
    //Obtenemos el valor de todos los campos de entrada
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //7) Llamamos al conjunto con el elemento del usuario, comprobamos los elementos
    if(usernameValue === '') {
        setError(username, 'Usuario requerido');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email Obligatorio');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Proporcione un email valido.');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Campo obligatorio');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña no puede ser inferior a 8 caracteres.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Por favor confirma tu contraseña.');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden.");
    } else {
        setSuccess(password2);
    }


}