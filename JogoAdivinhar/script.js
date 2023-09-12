const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 ; 

alert(randomNumber);


const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");


function Tentarbtn(event) {
event.preventDefault();

const inputNumber = document.querySelector("#inputNumber")

if (Number(inputNumber.value) == randomNumber){  
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

document.querySelector(".screen2 h2").innerText = "Você acertou em "+xAttempts + " top dms ";

}
xAttempts++
}



