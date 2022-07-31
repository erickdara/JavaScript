
// Función sencilla que retorna un objeto literal asignando las propiedades
// pasadas por argumento

/* function crearPersona(nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
} */

// Desde el ECMA Script 6 no hace falta especificar los nombres del objeto y el 
// argumento. NOTA: Solo se coloca el nombre de la propiedad y si es el mismo 
// que el nombre del argumento javascript va a saber que quieren imprimir una 
// propiedad cuyo nombre es el mismo pasado por argumento como el siguiente ejemplo:

/* function crearPersona (nombre, apellido){
    return {nombre, apellido}
} */

// Si la función de felcha lo único que tiene es un return se puede obviar este
// Función flecha que devuelve el objeto {nombre,apellido} 
// al obviar el retorno a travéz del uso de parentesís despúes de la flecha se retorna el objeto 
// NOTA: Los parentesis le indican a javascript que lo que se quiere regresar es todo
// lo que esta entre parentesis como objeto y no el cuerpo de la función
const crearPersona = (nombre, apellido) =>  ({nombre, apellido});

const persona = crearPersona ('Erick', 'Rangel');
console.log (persona);

// Imprime los argumentos enviados en la función representados en un arreglo
function imprimeArgumentos(){
    console.log(arguments);
}

// arguments no funciona con la función de flecha solo con las func tradicionales
// Para trabajar con los argumentos en una función de flecha lo que se puede hacer
// es escribir ...args esto hace referenvia al parametro rest(...) el cual le dice 
// que todos los argumentos que sean enviados por parametro se cree un arreglo con 
// cada uno de ellos 
// NOTA: Después del parametro rest no puede ir otro argumento.
// Si se necesita extraer una variable se debe colocar antes del parametro rest
// y este argumento va a tener su propio argumento independiente
// Sintaxis Rest (...parámetros)
// La sintaxis Rest luce exactamente como la sintaxis spread, pero esto es 
// usado por la desestructuración de arreglos y objetos. De cierta forma, la 
// sintaxis rest es la opuesta a la sintaxis spread: spread 'expande' un arreglo en sus elementos, mientras rest agrupa múltiples elementos y los 'condensa' en un único elemento.
const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad, args});
    return args;
}

// Con esta sintaxis se puede retornar las constantes declaradas en el arreglo 
// en cada indice con losnombres correspondientes a los argumento pasados a la función
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true,false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});

// Se puede coloca entre llaves el nombre de la propiedad que me interesa recuperar como valor en la constante
/* const {apellido} = crearPersona ('Erick', 'Rangel');
console.log({apellido}); */

// Con esta sintaxis se puede retornar un objeto especifico
// del objeto retornado como argumento en la función usando la declaración
// const {nombre: nuevoNombreDeseado} se puede cambiar el nombre despues de los :
const { apellido: nuevoApellido } = crearPersona ('Erick', 'Rangel');
console.log({nuevoApellido});

const tony = {
    nombre: 'tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};


// Recuperacion de propiedades sin destructuración de argumentos
// Funcion flecha con argumento de entrada objeto tony

/* const imprimePropiedades = ( personaje ) => {
    console.log('nombre', personaje.nombre);
    console.log('codeNa', personaje.codeName);
    console.log('vivo', personaje.vivo);
    console.log('edad', personaje.edad);
    console.log('trajes', personaje.trajes);
} */


//Destructuración de argumentos aplicada
// Estoy recibiendo un objeto tony con sus propiedades 
// Si se colocan llaves {} dentro de los parentesis de la funcion flecha
// Se puede extraer las propiedades del interes de ese objeto
// Si la propiedad de un objeto no es enviada como argumento entonces se obtendra undefined y puede ser un problema
// podría solucionarse haciendo una validación si la edad tiene valor que asigne el valor de edad sino con el operador || pasar otro valor
// Ejemplo: edad = edad || 0;
// NOTA: Esto ya no es necesario se puede colocar el valor por default del argumento dentro de los corchetes y si no existe asignara default
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo });
    console.log({edad });
    console.log({trajes});
}

imprimeArgumentos( tony );