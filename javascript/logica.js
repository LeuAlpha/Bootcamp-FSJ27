console.log ("holiwis") ;

alert("Holliwis");
confirm("Holliwis");
prompt("Holliwis, como estás");

console.log (confirmacion);
console.log (respuesta);

let numero1 = prompt ("Ingresar el primer numero a sumar");
let numero2 = prompt ("Ingresar el segundo numero a sumar");

let resultado= sumar (numero1 + numero2);
console.log (resultado);

function sumar (a,b) {
    a= parseInt (a);
    b= parseInt (b);
    return a + b;
}