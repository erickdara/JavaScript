/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */


let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');



//Está función crea un nuevo Deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos){
        for (let esp of especiales){
            deck.push( esp + tipo);
        }
    }

    //console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();

    console.log(deck);
    console.log(carta); //Carta debe ser de la baraja
    return carta;
}

//pedirCarta();
const valorCarta = (carta)=>{

    const valor = carta.substring(0, carta.length - 1);
    // let puntos =( isNaN(valor)) ? ( valor === 'A') ? 11 : 10 
    //                                                     : valor * 1;
    return (isNaN(valor) )? 
       ( valor === 'A') ? 11 : 10 
       : valor * 1;
                           
    // 2 = 2 10 = 10, 3 = 3

   /*  if ( isNaN(valor)){
        
        puntos = ( valor === 'A') ? 11 : 10;

    }else{
        console.log('Es un número');
        puntos = valor * 1;
    } */

   // console.log(puntos);
}

const valor = valorCarta(pedirCarta());
console.log({valor});


//Eventos
btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);

    puntosHTML[0].innerText = puntosJugador;
    console.log(puntosJugador);

});