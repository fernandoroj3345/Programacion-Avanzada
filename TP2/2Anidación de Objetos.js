/* 2. Anidación de Objetos: 
        Crea un objeto llamado estudiante con propiedades nombre, edad y direccion. 
        direccion debe ser otro objeto con propiedades calle, ciudad y pais.
        Imprime la dirección completa del estudiante. 
*/
const estudiante = {
    nombre: "Juan Pérez",
    edad: 22,
    direccion: {
        calle: "Avenida Siempre Viva 742",
        ciudad: "Springfield",
        pais: "Estados Unidos"
    }
};

// Imprimir la dirección completa del estudiante
console.log(`Dirección completa: ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);
