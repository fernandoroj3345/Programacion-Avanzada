/*Crea una función llamada elevarAlCuadrado que tome un array de números y
devuelva un nuevo array con cada número elevado al cuadrado. Usa map para 
implementar la función.*/

// Función elevarAlCuadrado
function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero ** 2);
  }
  
  // Ejemplo de uso
  const numeros = [5, 6, 7, 8, 9];
  const cuadrados = elevarAlCuadrado(numeros);
  
  console.log(cuadrados); // [25, 36, 49, 64, 81 ]
  