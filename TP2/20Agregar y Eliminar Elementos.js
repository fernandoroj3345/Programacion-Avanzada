/*Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
push para agregar una fruta al final, y pop para eliminar la última fruta.*/

// Crear el array frutas
const frutas = ["manzana", "banana", "pera"];

// Usar push para agregar una fruta al final
frutas.push("naranja");

console.log(frutas); // ["manzana", "banana", "pera", "naranja"]

// Usar pop para eliminar la última fruta
const frutaEliminada = frutas.pop();

console.log(frutas); // ["manzana", "banana", "pera"]
console.log(frutaEliminada); // "naranja" (la fruta que se eliminó)
