/* Crea una función llamada validarFormulario que tome un objeto con los campos
nombre, email y password. La función debe devolver true si todos los campos
están presentes y no están vacíos, y false en caso contrario*/

// Función validarFormulario
function validarFormulario(datos) {
    // Verificar que todos los campos estén presentes y no estén vacíos
    if (datos.nombre && datos.email && datos.password) {
      return true;  // Todos los campos están presentes y no están vacíos
    } else {
      return false;  // Algún campo está ausente o está vacío
    }
  }
  
  // Ejemplos de uso
  
  const formularioValido = {
    nombre: "Juan",
    email: "juan@example.com",
    password: "123456"
  };
  
  const formularioInvalido = {
    nombre: "",
    email: "juan@example.com",
    password: "123456"
  };
  
  console.log(validarFormulario(formularioValido));  // true
  console.log(validarFormulario(formularioInvalido));  // false
  