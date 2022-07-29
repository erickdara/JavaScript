
// function crearPersona (nombre, apellido){
//     return {nombre, apellido}
// }

// Función flecha que devuelve el objeto {nombre,apellido} 
// a travéz del uso de parentesís despúes de la flecha 
const crearPersona = (nombre, apellido) =>  ({nombre, apellido});

const persona = crearPersona ('Erick', 'Rangel');
console.log (persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad, args});
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = crearPersona ('Erick', 'Rangel');
console.log({nuevoApellido});

const tony = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log('nombre', personaje.nombre);
//     console.log('codeNa', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo });
    console.log({edad });
    console.log({trajes});
}

imprimeArgumentos( tony );