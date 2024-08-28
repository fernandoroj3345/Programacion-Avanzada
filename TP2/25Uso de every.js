/*Crea un array de números llamado numeros y usa every para verificar
si todos los números son positivos*/

// Crear el array de números
const numeros = [3, 7, 8, 12, 5];

// Usar every para verificar si todos los números son positivos
const todosPositivos = numeros.every(numero => numero > 0);

console.log(todosPositivos); // true
