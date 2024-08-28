/**Crea una función llamada tienePropiedad que tome un objeto y una cadena como
parámetros, y devuelva true si el objeto tiene una propiedad con ese nombre, o
false en caso contrario */

function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
  }
  
  // Ejemplo de uso
  const producto = {
    nombre: "Jeaans",
    precio: 1600,
    disponible: true
  };
  
  console.log(tienePropiedad(producto, "precio")); // true
  console.log(tienePropiedad(producto, "marca"));  // false
  