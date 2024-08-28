/*Usa Object.assign para combinar dos objetos, persona1 y persona2, en un nuevo
objeto.Imprime el resultado */

// Creación de los objetos persona1 y persona2
const persona1 = {
    nombre: "Fernando",
    edad: 42
  };
  
  const persona2 = {
    apellido: "Rojas",
    ocupación: "Albañil"
  };
  
  // Combinación de los objetos usando Object.assign
  const personaCombinada = Object.assign({}, persona1, persona2);
  
  // Imprimir el resultado
  console.log(personaCombinada);
  