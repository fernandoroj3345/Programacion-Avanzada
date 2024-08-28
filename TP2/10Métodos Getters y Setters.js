/*Añade un getter y un setter al objeto libro para la propiedad añoDePublicacion. Usa
el setter para actualizar el año de publicación y luego usa el getter para leerlo*/

// Creación del objeto libro con getter y setter para añoDePublicacion
const libro = {
    titulo: "Dune",
    autor: "Frank Herbert",
    _añoDePublicacion: 1985,  // Propiedad interna para almacenar el año de publicación
  
    // Getter para añoDePublicacion
    get añoDePublicacion() {
      return this._añoDePublicacion;
    },
  
    // Setter para añoDePublicacion
    set añoDePublicacion(nuevoAño) {
      if (typeof nuevoAño === 'number' && nuevoAño > 0) {
        this._añoDePublicacion = nuevoAño;
      } else {
        console.log("Por favor, introduce un año válido.");
      }
    }
  };
  
  // Uso del setter para actualizar el año de publicación
  libro.añoDePublicacion = 1985;  // Actualizando el año
  
  // Uso del getter para leer el año de publicación
  console.log("Año de publicación actualizado:", libro.añoDePublicacion);
  