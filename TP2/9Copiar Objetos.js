/*Crea una copia profunda del objeto estudiante utilizando el método JSON.parse y 
JSON.stringify.Modifica la copia y verifica que el objeto original no haya sido
alterado*/

// Creación del objeto original 'estudiante'
const estudiante = {
    nombre: "Ana",
    edad: 22,
    cursos: ["Matemáticas", "Física"],
    dirección: {
      ciudad: "Madrid",
      país: "España"
    }
  };
  
  // Creación de una copia profunda usando JSON.stringify y JSON.parse
  const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
  
  // Modificación de la copia
  copiaEstudiante.nombre = "Laura";
  copiaEstudiante.dirección.ciudad = "Barcelona";
  
  // Imprimir ambos objetos para verificar que el original no ha sido alterado
  console.log("Objeto original:", estudiante);
  console.log("Copia modificada:", copiaEstudiante);
  