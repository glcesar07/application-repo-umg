// Funciones que se encargarán de validar los datos que son ingresados por el usuario.

// Funcion que valida solo letras
const SoloLetras = e =>
{
    var regex = new RegExp("^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ]+$");
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
        e.preventDefault();
        return false;
    }
    e.target.value = e.target.value.replace(/^\s+/,"");
}

// Funcion que valida solo letras y numeros
const SoloLetrasyNumeros = e =>
{
    var regex = new RegExp("^[a-zA-ZáÁéÉíÍóÓúÚñÑüÜ0-9]+$");
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
        e.preventDefault();
        return false;
    }
    e.target.value = e.target.value.replace(/^\s+/,"");
}
 
const SoloPalabras = e =>
{
    var regex = new RegExp("^[a-zA-Z áÁéÉíÍóÓúÚñÑüÜ]+$");
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
        e.preventDefault();
        return false;
    }
}

// Funcion solo numeros
const SoloNumeros = e  =>
{
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}

//funcion solo correos con espacios
const SoloEmails = e =>
{
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, resp = null;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    resp = (e.target)?emailRegex.test(e.target.value):emailRegex.test(e.value);
    return resp;   
}