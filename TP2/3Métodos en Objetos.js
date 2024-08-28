/* Métodos en Objetos: 
Añade un método llamado descripción al objeto libro que devuelva una cadena describiendo
el título y el autor del libro. Invoca este método e imprime el resultado */
const libro1 = {
    titulo: "The Mazz Runner",
    autor: "James Dashner",

    // Método para describir el libro
    descripción: function() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
    }
};