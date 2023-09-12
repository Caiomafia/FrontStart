


const randomnumber = Math.round(Math.random() * 10 )
let Xattempts = 1;

let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")



alert(number)


function btntentar(event){
event.preventDefault();


const inputNumber = document.querySelector("#inputT")

if(Number(inputNumber.value) == randomnumber){

    document.querySelector(".screen2").classList.add("of")
    document.querySelector(".screen1").classList.remove("of")



screen1.querySelector(".screen2 .x").innerHTML = Xattempts;
console.log("acerto")
    
}






console.log(inputNumber.value)


inputNumber.innerHTML = 0 ;

Xattempts++;

}