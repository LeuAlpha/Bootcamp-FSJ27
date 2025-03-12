
function verificarEdad() {
    //Paso 1: Solicitamos la edad al usuario

    let edadTexto = prompt("Por favor, ingresa tu edad:");
 
    //Paso 2: Convertimos el texto a numero

    let edad = parseInt(edadTexto);
 
 
    //Paso 3: Usar el operador ternario para determinar el mensaje

    let mensaje = (edad >= 18)
        ? "Eres mayor de edad. Tienes acceso completo."
        : "Eres menor de edad. Acceso restringido.";
 
    //Paso 4: Mostrar el resultado

    alert(mensaje);
 
}
 
//Ejecutar la funcion
verificarEdad();