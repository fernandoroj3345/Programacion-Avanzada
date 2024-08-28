/*Crea una función llamada filtrarMayoresDe que tome un array
de números y un valor de referencia, y devuelva un nuevo array solo
con los números mayores que ese valor. Usa filter */

// Función filtrarMayoresDe
function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
  }
  
  // Ejemplo de uso
  const numeros = [10, 20, 30, 40, 50];
  const referencia = 25;
  const mayores = filtrarMayoresDe(numeros, referencia);
  
  console.log(mayores); // [30, 40, 50]
  