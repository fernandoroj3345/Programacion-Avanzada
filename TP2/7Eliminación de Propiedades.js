/*Elimina la propiedad disponible del objeto producto.
Imprime el objeto antes y después de eliminar la propiedad.*/

function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
  }
  
  // Ejemplo de uso
  const producto = {
    nombre: "Jeans",
    precio: 1600,
    disponible: true
  };
  
  // Imprimir el objeto antes de eliminar la propiedad
  console.log("Antes de eliminar la propiedad:", producto);
  
  // Eliminar la propiedad 'disponible'
  delete producto.disponible;
  
  // Imprimir el objeto después de eliminar la propiedad
  console.log("Después de eliminar la propiedad:", producto);
  
 