
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const modalimc = document.querySelector(".modal");
const result = document.querySelector("#result")








function calcular  (event) {
    event.preventDefault();
   
    let soma = weight.value / (height.value * height.value)
  
 console.log(soma.value);
    

modalimc.style.display = "flex"


}



imc = (height , weight ) =>{
    height;
    weight;
    
    return soma
}




// Referências aos elementos HTML
let modal = document.getElementById('myModal');


function abrirModal() {
    modal.style.display = 'block';
}


function fecharModal() {
    modal.style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}




function reset(){
    
}