

let a = 5;

if( a >= 10 ){
    console.log('A mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

 //console.log('Fin de programa');

 const hoy = new Date();
 console.log(hoy);
 let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles
 console.log({dia}); 

 if ( dia === 1){
    console.log('Lunes');
 }else {

    if( dia === 2 ){
        console.log('Martes');
    }else {
        console.log('No es lunes ni martes');
    }
   
 }


// Sin usar If Else, o Switch, únicamente objetos
dia = 6; // 0:domingo, 1: lunes...

const diaSemana = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miércoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sábado - 6',
}

const diaSemana2 = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

console.log(diaSemana2[3] || 'Dia no disponible');

