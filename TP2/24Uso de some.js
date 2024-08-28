/*Crea un array de números llamado numeros y usa some para verificar si algún
número es mayor que 10*/

// Crear el array de números
const numeros = [12, 52, 33, 1, 5];

// Usar some para verificar si algún número es mayor que 10
const algunMayorQueDiez = numeros.some(numero => numero > 10);

console.log(algunMayorQueDiez); // true
