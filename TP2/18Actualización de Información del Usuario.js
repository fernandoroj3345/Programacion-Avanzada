/*Crea una función llamada actualizarUsuario que tome un objeto usuario
y una lista de cambios a aplicar.La función debe retornar el usuario con las 
propiedades actualizadas */

// Función actualizarUsuario
function actualizarUsuario(usuario, cambios) {
    return {
      ...usuario, // Copia las propiedades del objeto usuario
      ...cambios  // Sobrescribe las propiedades con las de cambios
    };
  }
  
  // Ejemplo de uso
  const usuario = {
    id: 1,
    nombre: "Juan",
    email: "fernandorojas201482@gmail.com",
    edad: 30
  };
  
  const cambios = {
    nombre: "Fernando Rojas",
    edad: 31
  };
  
  const usuarioActualizado = actualizarUsuario(usuario, cambios);
  console.log(usuarioActualizado);
  // { id: 1, nombre: "Fernando Rojas", email: "fernandorojas201482@gmail.com", edad: 31 }
  