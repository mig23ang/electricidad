document.querySelector('#enviar').addEventListener('click', function () {

    let nombre = document.querySelector('#nombre').value;
    let correo = document.querySelector('#correo').value;
    let pregunta = document.querySelector('#pregunta').value;

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(correo)) {
        if (nombre === "" || correo === "") {
            alert("por favor ingresa todos los campos")
            return null;
        } else {
            let url = "https://api.whatsapp.com/send?phone=573202788396&text=*hola, me interesa*%0A*más información*%0A%0A*Mi nombre*%0A" + nombre + "%0A*sobre el tema:*%0A" + pregunta;
            window.open(url);
        }
    } else {
        alert("correo no valido")
    }

});