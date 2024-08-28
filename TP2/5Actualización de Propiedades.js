/*Modifica el valor de la propiedad precio del objeto producto y luego imprime
el objeto completo para verificar el cambio*/
// Creación del objeto producto
const producto = {
    nombre: "Jeans",
    precio: 6000,
    disponible: true
  };
  
  // Modifico del valor de la propiedad precio
  producto.precio = 10000; // Nuevo precio asignado
  
  // Imprimo el objeto completo para verificar el cambio
  console.log(producto);
  