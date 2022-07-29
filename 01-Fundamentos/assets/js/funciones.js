
function saludar(nombre){
    //Devuelve los argumentos enviados a la función
    console.log(arguments);
    console.log('Hola ' + nombre);
    //return 10;
}

const saludar2 = function(nombre){
    console.log('Hola '+ nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

// saludar2('Erick Rangel');
// saludar2('Erick Rangel');
// saludar2('Erick Rangel');

// saludar('Erick', 29, true, 'Colombia');

// saludarFlecha();
// saludarFlecha2('Erick Rangel');

const retornoDeSaludar = saludar('Erick', 29, true, 'Colombia');
console.log({retornoDeSaludar});

function sumar( a,b ){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a+b;
// }

// Función flecha simplificada
const sumar2 = (a,b) => a+b;

function getAleatorio() {
    return Math.random();
  }

// Realizar función de flecha, que no tenga llaves {}
// getAleatorio()

const getAleatorioFlecha = ()=> Math.random();

// console.log( sumar (1,2));
// console.log( sumar2 (5,10));
console.log(getAleatorioFlecha());