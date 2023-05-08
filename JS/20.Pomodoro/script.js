const INICIAR_TIME_IN_SECONDS = 24 * 60 ;
let TIME_IN_SECONDS = INICIAR_TIME_IN_SECONDS;

/*

setInterval é uma função que executa uma função específica repetidamente em um intervalo de tempo específico. A sintaxe básica é:

setInterval((parametro) => {função} , timer)
*/ 
setInterval(() => {

TIME_IN_SECONDS--;

const minute = Math.floor(TIME_IN_SECONDS / 60)

document.getElementById('min').innerHTML = minute;


const seconds = (TIME_IN_SECONDS % 60) < 10; 
document.getElementById('sec').innerHTML = seconds;


} , 1000)

/*
setTimeout é uma função que executa uma função específica depois de um determinado período de tempo ter decorrido. A sintaxe básica é:


javascript
Copy code
setTimeout(função, tempo);

Onde função é a função que será executada e tempo é o tempo em milissegundos antes que a função seja executada.

*/