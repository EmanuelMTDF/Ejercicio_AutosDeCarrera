// EJERCICIO "AUTOS DE CARRERA"

/*
• En una prueba, un piloto tiene que completar 4
vueltas
• Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
• El programa debe retornar el tiempo total y el
promedio de vuelta
*/

let tiempoVuelta1: number = Number(
  prompt("Por favor, ingrese el tiempo de la primer vuelta: (en segundos)")
);
let tiempoVuelta2: number = Number(
  prompt("Por favor, ingrese el tiempo de la segunda vuelta: (en segundos)")
);
let tiempoVuelta3: number = Number(
  prompt("Por favor, ingrese el tiempo de la tercer vuelta: (en segundos)")
);
let tiempoVuelta4: number = Number(
  prompt("Por favor, ingrese el tiempo de la cuarta vuelta: (en segundos)")
);

let tiempoTotal: number =
  tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
let promedio: number = tiempoTotal / 4;

console.log("El tiempo total es de:", tiempoTotal, "segundos");
console.log("El promedio de vuelta es de:", promedio, "segundos");
