const off = document.getElementById('off') // farol desligado
const buttons = document.getElementById('buttons') // função dos butões
let colorIndex = 0; // modo automatico
let intervalId = null; // intervalo do automático

// atribuindo funçao aos botoes
const luzesdetransito = ( event ) => {
    stopAutomatic(); 
    turnOn[event.target.id]();
    
}
// modo automatico
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

    // if ( colorIndex < 2 ) {
    //     colorIndex++
    // }else {
    //     colorIndex = 0;
    // }

    // atribuindo os alvos dos butões
const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ]; 
    turnOn[color]();
    nextIndex();

}
// parar o automatico
const stopAutomatic = () => {
    clearInterval ( intervalId );
}
   
    // atribuindo as imagens apos acionar os botoes
const turnOn = {
    'red':      () => off.src = './img/vermelho.png',
    'yellow':      () => off.src = './img/amarelo.png',
    'green':      () => off.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )

}

 
buttons.addEventListener('click', luzesdetransito );

