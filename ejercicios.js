/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. 
*/

function verificarEdad(edad) {

    let mensaje = (edad >= 18) ? "Eres mayor de edad" : "No eres mayor de edad";
    return mensaje;
  }
  
  let edadUsuario = 17; 

  console.log(verificarEdad(edadUsuario)); 


  /*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
Examen =20%// Tareas = 40% // Asistencia = 10% // Investigación = 30% */

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
  // Definir los porcentajes
  const pesoExamen = 0.20;
  const pesoTareas = 0.40;
  const pesoAsistencia = 0.10;
  const pesoInvestigacion = 0.30;
  
  // Calcular la nota final
  const notaFinal = (examen * pesoExamen) + (tareas * pesoTareas) + (asistencia * pesoAsistencia) + (investigacion * pesoInvestigacion);
  
  // Mostrar los resultados
  console.log("Nombre del alumno: " + nombre);
  console.log("Carnet: " + carnet);
  console.log("Nota final: " + notaFinal.toFixed(2));  // .toFixed(2) para mostrar la nota con 

}

/*EJERCICIO 3:
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/
  
function calcularAumento(nombre, salario, categoria) {
  // Definir el aumento según la categoría
  let aumento = 0;
  
  switch (categoria.toUpperCase()) {
      case 'A':
          aumento = 0.15;  // Aumento del 15% para categoría A
          break;
      case 'B':
          aumento = 0.30;  // Aumento del 30% para categoría B
          break;
      case 'C':
          aumento = 0.10;  // Aumento del 10% para categoría C
          break;
      case 'D':
          aumento = 0.20;  // Aumento del 20% para categoría D
          break;
      default:
          console.log("Categoría no válida");
          return;  // Si la categoría no es válida, terminamos la función
  }

  // Calcular el nuevo salario
  const aumentoSalarial = salario * aumento;
  const salarioFinal = salario + aumentoSalarial;

  // Mostrar los datos del empleado y el aumento
  console.log("Nombre del empleado: " + nombre);
  console.log("Salario inicial: $" + salario.toFixed(2));
  console.log("Categoría: " + categoria);
  console.log("Aumento: $" + aumentoSalarial.toFixed(2));
  console.log("Nuevo salario: $" + salarioFinal.toFixed(2));
}

/* EJERCICIO 4
Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */

function encontrarMayor(num1, num2) {
  // Compara los dos números y devuelve el mayor
  if (num1 > num2) {
      return num1;
  } else if (num2 > num1) {
      return num2;
  } else {
      return "Los números son iguales";
  }
}

// Función para pedir los datos al usuario
function obtenerDatos() {
  // Solicitar al usuario que ingrese los dos números
  const num1 = parseInt(prompt("15"));
  const num2 = parseInt(prompt("10"));
  
  // Llamar a la función para encontrar el mayor
  const mayor = encontrarMayor(num1, num2);
  
  // Mostrar el resultado
  console.log("El número mayor es: " + mayor);
}

// Llamar a la función obtenerDatos para pedir los números y calcular el mayor
obtenerDatos ();


/* EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario. */


/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */

function calcularDescuento(origen, destino, precio) {
  let descuento = 0;
  let mensaje = '';

  // Verificar si el origen es Palma
  if (origen.toLowerCase() === "palma") {
      switch (destino.toLowerCase()) {
          case "la costa del sol":
              descuento = 0.05; // 5% de descuento
              mensaje = "Descuento del 5% aplicado.";
              break;
          case "panchimalco":
              descuento = 0.10; // 10% de descuento
              mensaje = "Descuento del 10% aplicado.";
              break;
          case "puerto el triunfo":
              descuento = 0.15; // 15% de descuento
              mensaje = "Descuento del 15% aplicado.";
              break;
          default:
              mensaje = "No hay descuento disponible para este destino.";
              break;
      }
  } else {
      mensaje = "El descuento solo aplica si el origen es Palma.";
  }

  // Calcular el precio con descuento
  const descuentoAplicado = precio * descuento;
  const precioFinal = precio - descuentoAplicado;

  // Mostrar el resultado
  if (descuento > 0) {
      mensaje += `\nDescuento aplicado: $${descuentoAplicado.toFixed(2)}\nPrecio final: $${precioFinal.toFixed(2)}`;
  }

  return mensaje;
}

// Ejemplo de uso
const origen = "Palma";
const destino = "Panchimalco";
const precio = 1000; // Precio en USD

const resultado = calcularDescuento(origen, destino, precio);
console.log(resultado);
