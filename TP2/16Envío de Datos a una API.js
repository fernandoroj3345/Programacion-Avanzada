/*Crea una función llamada enviarDatos que tome un objeto data y haga
una petición POST a la API https://jsonplaceholder.typicode.com/posts.
La función debe imprimir la respuesta de la API */


// Función enviarDatos
async function enviarDatos(data) {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Método HTTP POST
        headers: {
          'Content-Type': 'application/json' // Especifica que se envían datos en formato JSON
        },
        body: JSON.stringify(data) // Convierte el objeto data en una cadena JSON
      });
  
      // Verificar si la respuesta fue exitosa
      if (!respuesta.ok) {
        throw new Error(`Error en la petición: ${respuesta.status}`);
      }
  
      const respuestaJson = await respuesta.json(); // Convierte la respuesta en un objeto JavaScript
      console.log(respuestaJson); // Imprime la respuesta de la API
    } catch (error) {
      console.error("Hubo un problema con la petición:", error);
    }
  }
  
  // Ejemplo de uso
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  
  enviarDatos(data);
  