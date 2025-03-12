
function calcularAumento() {

    // Pedir los datos al usuario
    let nombre = prompt("Ingrese el nombre del trabajador:");
    let salario = parseFloat(prompt("Ingrese el salario actual del trabajador:"));
    let categoria = prompt("Ingrese la categoría del trabajador (A, B, C, D):").toUpperCase();
  
    // Definir el aumento según la categoría
    let aumento = 0;
    
    // Calcular el aumento según la categoría
    switch (categoria) {
      case "A":
        aumento = salario * 0.15; // Aumento del 15%
        break;
      case "B":
        aumento = salario * 0.30; // Aumento del 30%
        break;
      case "C":
        aumento = salario * 0.10; // Aumento del 10%
        break;
      case "D":
        aumento = salario * 0.20; // Aumento del 20%
        break;
      default:
        alert("Categoría no válida. Por favor ingrese A, B, C o D.");
        return;
    }
  
    // Calcular el nuevo salario
    let nuevoSalario = salario + aumento;
  
    // Mostrar los datos del trabajador y el aumento
    alert(`Datos del trabajador:
    Nombre: ${nombre}
    Salario actual: $${salario}
    Categoría: ${categoria}
    Aumento: $${aumento}
    Nuevo salario: $${nuevoSalario}`);
  }
  
  // Llamar a la función para ejecutar el cálculo
  calcularAumento();
  