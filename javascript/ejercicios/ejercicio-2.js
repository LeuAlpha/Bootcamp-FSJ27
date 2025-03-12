
function calcularNotaFinal() {

  // Pedir los datos al usuario

  let nombre = prompt("Ingrese el nombre del alumno:");
  let carnet = prompt("Ingrese el carnet del alumno:");
  let examen = parseFloat(prompt("Ingrese la nota del examen (0-10):"));
  let tareas = parseFloat(prompt("Ingrese la nota de las tareas (0-10):"));
  let asistencia = parseFloat(prompt("Ingrese la nota de la asistencia (0-10):"));
  let investigacion = parseFloat(prompt("Ingrese la nota de investigación (0-10):"));

  // Calcular la nota final según los porcentajes

  let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

  // Mostrar los resultados

 alert(`Datos del estudiante:
    Nombre: ${nombre}
    Carnet: ${carnet}
   Nota final: ${notaFinal.toFixed(2)}`);
}

// Llamar a la función para ejecutar el cálculo

calcularNotaFinal();
