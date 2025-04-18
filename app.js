// Pedir los dos números
let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

// Convertir los valores a números reales
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verificar que los valores sean números válidos
if (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor, ingrese números válidos.");
} else {
  // Elegir la operación
  let operacion = prompt("¿Qué operación desea realizar? (+, -, *, /)");

  // Verificar la operación y realizarla
  if (operacion === "+") {
    let resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
  } else if (operacion === "-") {
    let resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
  } else if (operacion === "*") {
    let resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
  } else if (operacion === "/") {
    if (numero2 === 0) {
      alert("Error: no se puede dividir por cero.");
    } else {
      let resultado = numero1 / numero2;
      alert("El resultado de la división es: " + resultado);
    }
  } else {
    alert("Operación no reconocida. Use +, -, * o /.");
  }
}
