
/* const elMayor = (a, b) => {
    return ( a > b ) ? a : b;
} */

//Se puede reducir la función usando el operador ternario
const elMayor = (a, b) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(15,6));
console.log(tieneMembresia(false));

// Se puede usar el operador ternario para la asignación de una propiedad dentro del 
// arreglo de acuerdo a la validación que se especifique 
const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (()=> 'Nick Fury')(),
    elMayor(10,5),
];

console.log( amigosArr);

// Otro uso del operador ternario 
const nota = 100; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota,grado});
