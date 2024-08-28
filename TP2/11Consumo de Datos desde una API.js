/*Consumo de Datos desde una API/*

/*Crea una función llamada obtenerUsuarios que haga una petición 
HTTP a la API https://jsonplaceholder.typicode.com/users usando fetch.
Luego, imprime en la consola la lista de usuarios obtenida.*/
// Definición de la función obtenerUsuarios
async function obtenerUsuarios() {
    try {
      // Haciendo la petición HTTP usando fetch
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Verificando que la respuesta sea exitosa
      if (!respuesta.ok) {
        throw new Error(`Error en la petición: ${respuesta.status}`);
      }
  
      // Parseando la respuesta a formato JSON
      const usuarios = await respuesta.json();
  
      // Imprimiendo la lista de usuarios en la consola
      console.log("Lista de usuarios obtenida:", usuarios);
    } catch (error) {
      // Manejo de errores
      console.error("Hubo un problema con la petición:", error);
    }
  }
  
  // Llamada a la función para obtener e imprimir los usuarios
  obtenerUsuarios();
  