/*Crea una función llamada mapearUsuarios que tome un array de
usuarios obtenidos de la API y devuelva un nuevo array con solo las
propiedades nombre y email
de cada usuario */

// Función mapearUsuarios
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
      return {
        nombre: usuario.name,
        email: usuario.email
      };
    });
  }
  
  // Ejemplo de uso con datos obtenidos de la API
  
  async function obtenerUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!respuesta.ok) {
        throw new Error(`Error en la petición: ${respuesta.status}`);
      }
  
      const usuarios = await respuesta.json();
      return usuarios;  // Devuelvo la lista de usuarios
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
      return [];  // Devuelvo un array vacío en caso de error
    }
  }
  
  async function ejecutarMapeo() {
    const usuarios = await obtenerUsuarios();
    const usuariosMapeados = mapearUsuarios(usuarios);
    console.log(usuariosMapeados);
  }
  
  // Llamo a la función para obtener los usuarios y mapearlos
  ejecutarMapeo();
  