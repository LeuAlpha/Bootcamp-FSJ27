
function encontrarMayor() {

    let num1 = prompt ("Ingresar un numero");
    let num2 = prompt ("Ingresar otro numero");   


    if (num1 > num2) {
        alert ( "El mayor es el numero : " + num1);
    } else if (num2 > num1) {
        alert ( "El mayor es el numero : " + num2);
    } else {
        alert ("Los números son iguales");
    }

}

encontrarMayor ()  

