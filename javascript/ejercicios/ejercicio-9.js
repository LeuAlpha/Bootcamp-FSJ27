
function convertirTemperatura() {
 
    // Pedir la temperatura en Celsius al usuario
 
    let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));
  
 
    // Convertir la temperatura de Celsius a Fahrenheit
 
    let fahrenheit = (celsius * 9 / 5) + 32;
  
    // Mostrar el resultado de la conversión
 
    alert(`La temperatura en Fahrenheit es: ${fahrenheit}ºF`);
  
    // Verificar en qué rango de temperatura se encuentra
 
    if (fahrenheit >= 14 && fahrenheit < 32) {
      alert("Temperatura baja");
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
      alert("Temperatura adecuada");
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
      alert("Temperatura alta");
    } else {
      alert("Temperatura desconocida");
    }
  }
  
  // Llamar a la función para ejecutar el programa
  convertirTemperatura();
  