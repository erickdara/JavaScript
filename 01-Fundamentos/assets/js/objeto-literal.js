const personaje = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    dirección: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': "Infinity War",
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No trajes', personaje.trajes.length);
console.log('último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película', personaje["ultima-pelicula"]);

//Más Detalles 

delete personaje.edad;

console.log(personaje);

personaje.casado = true;

//Devuelve el objeto en arreglo llave valor
const entriesPares = Object.entries (personaje);
console.log(entriesPares);

// Congela el objeto con las propiedades definidas al momento
// Solo las propiedades directas 
Object.freeze(personaje);
personaje.dinero = 100000000;
console.log(personaje);

// Obtiene los nombres de las propiedades del objeto
const propiedades = Object.getOwnPropertyNames(personaje);
// Obtiene los valores de las propiedades del objeto
const valores = Object.values(personaje);
console.log({propiedades, valores});


//console.log({propiedades});


