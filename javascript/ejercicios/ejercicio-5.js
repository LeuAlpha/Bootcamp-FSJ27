function calcularDescuento(coche, precio) {
    let descuento;

    // Definir los descuentos según el modelo del coche
    if (coche === "FORD FIESTA") {
        descuento = 0.05;  // 5%
    } else if (coche === "FORD FOCUS") {
        descuento = 0.10;  // 10%
    } else if (coche === "FORD ESCAPE") {
        descuento = 0.20;  // 20%
    } else {
        descuento = 0;  // Sin descuento si el coche no es ninguno de los mencionados
    }

    // Calcular el precio con el descuento
    const precioConDescuento = precio * (1 - descuento);

    // Devolver el precio con descuento
    return precioConDescuento;
}

// Pedir al usuario el modelo del coche y el precio
const modeloCoche = prompt("Ingresa el modelo del coche (FORD FIESTA, FORD FOCUS, FORD ESCAPE):");
const precioCoche = parseFloat(prompt("Ingresa el precio del coche:"));

// Llamar a la función para calcular el precio con descuento
const precioFinal = calcularDescuento(modeloCoche, precioCoche);

// Mostrar el precio final con descuento
alert(`El precio final del ${modeloCoche} es: $${precioFinal.toFixed(2)}`);
