/*Crea un array de objetos llamados personas donde cada objeto tenga nombre y edad.
Usa find para encontrar a la primera persona mayor de 30 años*/

// Crear el array de objetos personas
const personas = [
    { nombre: "Pedro", edad: 12 },
    { nombre: "Rosa", edad: 68 },
    { nombre: "Genaro", edad: 75 },
    { nombre: "Norma", edad: 100 }
  ];
  
  // Usar find para encontrar a la primera persona mayor de 30 años
  const personaMayorDeTreinta = personas.find(persona => persona.edad > 30);
  
  console.log(personaMayorDeTreinta); 
  // { nombre: "Rosa", edad: 32 }
  