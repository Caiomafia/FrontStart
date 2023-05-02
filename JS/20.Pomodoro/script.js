const INICIAR_TIME_IN_SECONDS = 24 * 60 ;
let TIME_IN_SECONDS = INICIAR_TIME_IN_SECONDS;


setInterval(() => {

TIME_IN_SECONDS--;

const minute = Math.floor(TIME_IN_SECONDS / 60)

document.getElementById('min').innerHTML = minute;


const seconds = (TIME_IN_SECONDS % 60) < 10; 
document.getElementById('sec').innerHTML = seconds;


} , 1000)