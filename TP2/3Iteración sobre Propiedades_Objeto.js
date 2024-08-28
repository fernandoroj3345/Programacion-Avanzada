/*Crea un objeto producto con propiedades como nombre, precio y
disponible. Usa un bucle for...in para imprimir todas las propiedades
y sus valores.*/ 
// Creo el objeto producto

const producto = {
    nombre: "Jeans",
    precio: 40000,
    disponible: true
  };
  
  //Usao un bucle for...in para imprimir propiedades y valores
  for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }

  