/*Crea una función llamada obtenerPagina que tome un array de datos y un número de
página. La función debe devolver los elementos correspondientes a esa página,
asumiendo que cada página tiene 5 elementos */

// Función obtenerPagina
function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
  }
  
  // Ejemplo de uso
  
  const datos = [
    "Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5",
    "Elemento 6", "Elemento 7", "Elemento 8", "Elemento 9", "Elemento 10",
    "Elemento 11", "Elemento 12", "Elemento 13", "Elemento 14", "Elemento 15"
  ];
  
  console.log(obtenerPagina(datos, 1));  // ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"]
  console.log(obtenerPagina(datos, 2));  // ["Elemento 6", "Elemento 7", "Elemento 8", "Elemento 9", "Elemento 10"]
  console.log(obtenerPagina(datos, 3));  // ["Elemento 11", "Elemento 12", "Elemento 13", "Elemento 14", "Elemento 15"]
  