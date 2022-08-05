
// cuando se tabajan con primitivos cualquier tipo de adignación o cuando se 
// envia a una función como argumento se esta enviando como valor
// NOTA: no importa si se transforma la variable en otra cosa no se esta afectando
// el mismo lugar en memoria
let a = 10;
let b = a;
a =  30;

console.log({a,b});

// En javascript todos los objetos son pasados por referencia 
// NOTA: Todos los primitivos son pasados por valor y todos los objetos por referencia
// Una solución para cambiar el valor de un objeto
// es copiar el objeto en la asignación haciendo el uso de {...}(corchetes) con
// el operador spread ...
// Ejemplo: let ana = {...juan};
// La sintaxis extendida o spread (...) syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más 
// argumentos (para llamadas de  función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más 
// pares de valores clave (para literales Tipo Objeto) son esperados.



let juan = {nombre :'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

// Una solución para cambiar el valor de un objeto
// es copiar el objeto en la asignación haciendo el uso de {}(corchetes)
const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre ( peter ); 

// Al imprimir, como el objeto es pasado por referencia en la función se afecta el argumento
// que tiene la misma referencia del objeto
console.log({peter, tony})

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread')

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});


