/*Crea una función llamada sumarElementos que tome un array de números y devuelva
la suma de todos los elementos del array
usando reduce */

// Función sumarElementos
function sumarElementos(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  // Ejemplo de uso
  const numeros = [10, 20, 30, 40, 50];
  const suma = sumarElementos(numeros);
  
  console.log(suma); // 150
  