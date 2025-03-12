
function calcularPromedio() {

    // Pedir las edades de los estudiantes del turno mañana (5 estudiantes)
    let edadesMañana = 0;
    for (let i = 1; i <= 5; i++) {
      edadesMañana += parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno mañana:`));
    }
    let promedioMañana = edadesMañana / 5;
  
    // Pedir las edades de los estudiantes del turno tarde (6 estudiantes)
    let edadesTarde = 0;
    for (let i = 1; i <= 6; i++) {
      edadesTarde += parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno tarde:`));
    }
    let promedioTarde = edadesTarde / 6;
  
    // Pedir las edades de los estudiantes del turno noche (11 estudiantes)
    let edadesNoche = 0;
    for (let i = 1; i <= 11; i++) {
      edadesNoche += parseInt(prompt(`Ingrese la edad del estudiante ${i} del turno noche:`));
    }
    let promedioNoche = edadesNoche / 11;
  
    // Imprimir los promedios de cada turno
    alert(`Promedio de edades del turno mañana: ${promedioMañana}`);
    alert(`Promedio de edades del turno tarde: ${promedioTarde}`);
    alert(`Promedio de edades del turno noche: ${promedioNoche}`);
  
    // Determinar cuál turno tiene el promedio más alto
    let mensaje = "";
    if (promedioMañana > promedioTarde && promedioMañana > promedioNoche) {
      mensaje = "El turno mañana tiene el promedio de edades más alto.";
    } else if (promedioTarde > promedioMañana && promedioTarde > promedioNoche) {
      mensaje = "El turno tarde tiene el promedio de edades más alto.";
    } else if (promedioNoche > promedioMañana && promedioNoche > promedioTarde) {
      mensaje = "El turno noche tiene el promedio de edades más alto.";
    } else {
      mensaje = "Hay un empate entre los promedios de los turnos.";
    }
  
    // Mostrar cuál turno tiene el promedio más alto
    alert(mensaje);
  }
  
  // Llamar a la función para ejecutar el cálculo
  calcularPromedio();