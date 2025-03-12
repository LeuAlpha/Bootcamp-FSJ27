
function mostrarTablaMultiplicar() {
   
    // Pedir al usuario que ingrese el número
    const numero = parseInt(prompt("Ingresa el número del que deseas ver la tabla de multiplicar:"));

    // Crear una cadena para almacenar los resultados de la tabla de multiplicar
    let tabla = `Tabla de multiplicar del ${numero}:\n`;

    // Calcular la tabla de multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Mostrar la tabla de multiplicar
    alert(tabla);
}

// Llamar a la función para ejecutarla
mostrarTablaMultiplicar();


