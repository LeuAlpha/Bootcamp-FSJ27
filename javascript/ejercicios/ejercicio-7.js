
// Inicializar los contadores y el acumulador
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let pares = 0;

// Realizar la carga de 10 valores
let contador = 0;

while (contador < 10) {
    let numero = parseInt(prompt(`Ingresa el valor ${contador + 1} de 10:`));

        
     // Verificar que el valor ingresado sea un número
     if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }

    // Contar los valores negativos
    if (numero < 0) {
        negativos++;
    }

    // Contar los valores positivos
    if (numero > 0) {
        positivos++;
    }

    // Contar los múltiplos de 15
    if (numero % 15 === 0) {
        multiplosDe15++;
    }

    // Acumular los números pares
    if (numero % 2  === 0) {
        pares += numero;
    }

     // Incrementar el contador solo si el número es válido
     contador++;
}

// Mostrar los resultados en alertas

alert(`Cantidad de valores negativos: ${negativos}`);
alert(`Cantidad de valores positivos: ${positivos}`);
alert(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
alert(`Valor acumulado de números pares: ${pares}`);

    
    