/*Crea una función llamada buscarUsuarioPorEmail que tome un array de usuarios
y un email como parámetros, y devuelva el usuario que coincida con el email
proporcionado. Usa el método find para implementarlo.*/

// Función buscarUsuarioPorEmail
function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
  }
  
  // Ejemplo de uso
  const usuarios = [
    { id: 1, nombre: "Juan", email: "juan@example.com" },
    { id: 2, nombre: "Ana", email: "ana@example.com" },
    { id: 3, nombre: "Carlos", email: "carlos@example.com" }
  ];
  
  const emailBuscado = "ana@example.com";
  const usuarioEncontrado = buscarUsuarioPorEmail(usuarios, emailBuscado);
  
  console.log(usuarioEncontrado); // { id: 2, nombre: "Ana", email: "ana@example.com" }
  