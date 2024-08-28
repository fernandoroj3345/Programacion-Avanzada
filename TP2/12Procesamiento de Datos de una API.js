/*Usando la función obtenerUsuarios, crea otra función llamada
imprimirNombresDeUsuarios que filtre
y muestre solo los nombres de los usuarios */

// Función obtenerUsuarios como definida anteriormente
async function obtenerUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!respuesta.ok) {
        throw new Error(`Error en la petición: ${respuesta.status}`);
      }
  
      const usuarios = await respuesta.json();
      return usuarios;  // Devolvemos la lista de usuarios
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
      return [];  // Devolvemos un array vacío en caso de error
    }
  }
  
  // Función imprimirNombresDeUsuarios que usa obtenerUsuarios para mostrar solo los nombres
  async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();  // Obtenemos la lista de usuarios
    
    // Filtramos y mostramos solo los nombres
    const nombres = usuarios.map(usuario => usuario.name);
    console.log("Nombres de los usuarios:", nombres);
  }
  
  // Llamada a la función para imprimir los nombres de los usuarios
  imprimirNombresDeUsuarios();
  