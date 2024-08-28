/*Crea una función llamada autenticarUsuario que tome
un objeto credenciales con usuario y contraseña, y verifique si coinciden
con un usuario predefinido. La función debe devolver true si la
autenticación es exitosa y false en caso contrario*/

// Definición del usuario predefinido
const usuarioPredefinido = {
    usuario: "admin",
    contraseña: "1234"
  };
  
  // Función autenticarUsuario
  function autenticarUsuario(credenciales) {
    // Verificación de las credenciales
    if (
      credenciales.usuario === usuarioPredefinido.usuario &&
      credenciales.contraseña === usuarioPredefinido.contraseña
    ) {
      return true; // Autenticación exitosa
    } else {
      return false; // Autenticación fallida
    }
  }
  
  // Ejemplos de uso
  
  // Credenciales correctas
  const credencialesCorrectas = {
    usuario: "admin",
    contraseña: "1234"
  };
  
  // Credenciales incorrectas
  const credencialesIncorrectas = {
    usuario: "user",
    contraseña: "abcd"
  };
  
  // Autenticación con credenciales correctas
  console.log(autenticarUsuario(credencialesCorrectas)); // true
  
  // Autenticación con credenciales incorrectas
  console.log(autenticarUsuario(credencialesIncorrectas)); // false
  