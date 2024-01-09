const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 ; 

alert(`${randomNumber} esse e o da vez`)


const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");



function Tentarbtn(event) {
event.preventDefault()
const inputNumber = document.querySelector("#inputNumber")

if(Number(inputNumber) == randomNumber){

  alert("e igual")
}

xAttempts++
}



//Eventos 


const novoBtn = document.querySelector(".Novobtn");
const reset = document.querySelector("#reset");


//call back
reset,


novoBtn.addEventListener('click' , function(event){

    event.preventDefault
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
  inputNumber.value = ""
  

})