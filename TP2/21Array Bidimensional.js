/*Crea un array bidimensional llamado matriz con los valores [[1, 2, 3], [4, 5, 6], 
[7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola. 3. Iterar sobre un Array:
Usa un bucle for para iterar sobre el array frutas e imprimir cada elemento*/

// Crear el array bidimensional matriz
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Acceder al elemento 5
  const elementoCinco = matriz[1][1];
  console.log(elementoCinco); // 5
  
  // Crear el array frutas
  const frutas = ["manzana", "banana", "pera"];
  
  // Usar un bucle for para iterar sobre el array frutas e imprimir cada elemento
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  