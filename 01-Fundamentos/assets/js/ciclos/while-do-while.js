

const carros = ['Ford','Mazda', 'Honda', 'Toyota'];

let i = 0;

/* while (i < carros.length) { // La condición tiene que ser verdadera
    console.log(carros[i]);
    i++;
    
} */

console.warn('While');

while (carros[i]){
    if (i === 1){
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

console.warn('Do while');

let j = 0;

do {
    console.log(carros[j]);
    j++;
} while(carros[j]);