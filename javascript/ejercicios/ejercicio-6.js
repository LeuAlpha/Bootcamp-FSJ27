
function calcularDescuento() {

  // Pedir los datos al usuario

  let origen = prompt("Ingrese la ciudad de origen:").toLowerCase();;
  let destino = prompt("Ingrese la ciudad de destino:").toLowerCase();;
  
  // Definir las variables de descuento

  let descuento = 0;
  
  // Calcular el descuento según el destino

  if (origen === "palma") {
    if (destino === "la costa del sol") {
      descuento = 5; // 5% de descuento
    } else if (destino === "panchimalco") {
      descuento = 10; // 10% de descuento
    } else if (destino === "puerto el triunfo") {
      descuento = 15; // 15% de descuento
    } else {
      alert("Destino no válido o no tiene descuento.");
    }
  } else {
    alert("El origen debe ser Palma para aplicar descuentos.");
  }
  
  // Mostrar el resultado
  
  if (descuento > 0) {
    alert(`El descuento para tu viaje desde ${origen} a ${destino} es del ${descuento}%`);
  }
}

// Llamar a la función para ejecutar el cálculo
calcularDescuento();
