/*Crea una función llamada generarToken que tome un objeto usuario y devuelva un 
token JWT simulado como una cadena.Puedes usar una función como btoa (Base64)
para simular la generación del token.*/


// Función generarToken
function generarToken(usuario) {
    // Encabezado del token JWT simulado
    const header = {
      alg: "HS256", // Algoritmo de encriptación
      typ: "JWT"    // Tipo de token
    };
  
    // Convertir el encabezado y el usuario (payload) en JSON y luego a Base64
    const headerBase64 = btoa(JSON.stringify(header));
    const payloadBase64 = btoa(JSON.stringify(usuario));
  
    // Simulación del "token" (en un JWT real, habría una firma también)
    const token = `${headerBase64}.${payloadBase64}`;
  
    return token;
  }
  
  // Ejemplo de uso
  const usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@example.com"
  };
  
  const token = generarToken(usuario);
  console.log(token);  // Ejemplo: "eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJpZCI6IDEsICJub21icmUiOiAiSnVhbiIsICJlbWFpbCI6ICJqdWFuQGV4YW1wbGUuY29tIn0="
  