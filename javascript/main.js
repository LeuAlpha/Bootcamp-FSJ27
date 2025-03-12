/*      DEFINICION DE JAVASCRIPT -> RETO: EXPLICARLE A UN CONEJILLO DE INDIAS ESTO (PERSONA QUE NO SABE)
    Javascript es una forma de hablarle a la computadora 
    Es interpretado por el navegador, osea, quien lo lee y entiende es el navegador
    Tambien puede ser interpretado por un servidor en NodeJS
    Debilmente Tipado -> Nos permite hacer algunas equivocaciones
*/

// COMENTARIOS -> SON LINEAS QUE NO SE EJECUTAN
// COMENTARIOS DE UNA LINEA

/* COMENTARIOS 
MULTI
LINEAS
*/
/*
// IMPRIMIR O MOSTRAR MENSAJE O DATOS
console.log("Holiwis "+nombre);
console.log("Chau Jairo");

//Variables -> Espacio de memoria que guarda un valor 
// Palabra reservada NOMBRE_VARIABLE asigno VALOR
var nombre = "Jairo";
console.log(nombre);

//VAR VS LET

//VAR SE PUEDE REDECLARAR Y REINICIALIZAR
var nombre = "Jasson";
console.log(nombre);
nombre = "Pepito";
console.log(nombre);

//LET NO SE PUEDE REDECLARAR
let apellido = "Gonzalez";
console.log(apellido);

apellido = "Fuentes";
console.log(apellido);


//Const -> Constante no se puede redeclarar ni reinicializar
const pi = 3.1416;
console.log(pi);


//Tipos de Datos Primitivos

let string = "Hola soy un string";
let number = 12;
let boolean = true;
let nulo = null; // No tiene valor


//Operadores
//Logicos -> AND, OR, NOT
//Matematicos -> +, -, *, /, % 
//Comparacion -> ==, ===, !=, !==, <, >, <=, >=


/* ----- ESTRUCTURAS ----- */

//Condicionales
/*
//if - else
//Evalua una condicion -> TRUE o FALSE
if(5>3){
    //codigo en caso true
}else{
    //codigo en caso false
}

// Switch
// Evaluar un valor y compararlo con otros valores

let opcion = 3;
switch(opcion){
    case 1:
        console.log("Eligi conectarme con Finanzas");
        break;
    case 2:
        console.log("Elegi conectarme con RRHH");
        break;
    default: 
        console.log("Por favor, ingrese una opcion valida");
}

// Ternario
// CONDICION ? RESPUESTA TRUE : RESPUESTA FALSE  
let resultado = false ? 
"El 5 es mayor a 3" : 
"El 5 no es mayor a 3";
console.log(resultado);

let usuario = "admin";

let mensaje = usuario === "admin" ? "Bienvenido gfesito" : "Anda pa alla";

console.log(mensaje);


// Ciclos -> Bucles o Estructuras repetitivas
//While


let contador = 0;
while(contador < 5 && contador > 0 ){
    console.log("Estoy girando, soy un dado Wiii");
    contador++;
    }
   
// Do While
do{
    console.log("Me ejecuto, soy el do while");
    contador++; //1
}while(contador < 5 && contador > 0 );
*/

//For
for(let contador = 0; contador < 5; contador++){
    console.log(contador);
    console.log("Estoy girando, soy un dado Wiii");   
}

//Funciones 

//Declaraion de funcion 
// Funcion tipo Void
function saludar(){
    console.log("Hola soy una funcion");
}

//Funcion tipo Return

function login(){
    return "Bienvenido";
}

//Invocar o llamar a una funcion
saludar();

let resultado = saludar();
let resulta2 = login();
console.log(resultado);
console.log(resulta2);


//Parametros -> Datos que recibe una funcion
function sumarDosNumeros(num1,num2){
    console.log(num1+num2);
    
    return num1+num2;
}

let suma = sumarDosNumeros(5,5);
let suma2 = sumarDosNumeros(13,8);
console.log(suma2);


//Scope -> Alcance de una variable
//Global -> Variable que se puede acceder desde cualquier parte del codigo
//Local -> Variable que solo se puede acceder desde un bloque de codigo
let varGlobal = "Soy global";
console.log("Global: "+varGlobal);

console.log(juanito);

mostrarVarLocal(); //3

function mostrarVarLocal(){
    let varLocal = "Soy local";
    console.log("Soy un console log y este es el mensaje "+varLocal);
    return varLocal
}
let varLocal = mostrarVarLocal(); //1
console.log(varLocal); //2

//Hoisting -> Comportamiento al momento de ejecutar el codigo
//Eleva las declaraciones de las funciones al inicio del archivo

//Funciones anonimas

let caja = function (){
    console.log("Soy anonima");
}


// Callbacks -> Funciones que se pasan como parametros a otras funciones

function funcionsitaConCallback(callback){
    console.log("Dentro de esta funcion sigue el callback: ");
    
    callback();
}

funcionsitaConCallback(caja);
funcionsitaConCallback(mostrarVarLocal);
funcionsitaConCallback(function (){
    console.log("Soy anonima");
});