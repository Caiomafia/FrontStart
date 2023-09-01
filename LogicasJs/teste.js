/*Crie um sistema de notas para uma escola que calcula a media entre as notas e passa reprovado ou aprovado




let name = prompt("Qual o seu nome ?")
let BiOne = prompt("Qual sua nota do primeiro bimestre ?");
let BiTwo = prompt("Qual sua nota do segundo bimestre ?");
let BiTree = prompt("Qual sua nota do terceiro bimestre ?");




let validar = Number(BiOne) + Number(BiTwo) + Number(BiTree) / 3 ;

if(validar >= 6 ){
    alert(` Parabens ${name} você passo com uma media de ${validar.toFixed(2)}`)
}
else if(validar >= 5 ){
    alert(` Você  ${name} fico de recuperação ${validar.toFixed(2)}`)
}
else{alert(`Você não passo infelizmente sua media foi de ${validar.toFixed(2)}`)}





//crie um lista de supermercado 

let array = []

for(let i = 0 ; i < 10 ; i++ ){
    let itens = prompt("qual  e o item do supermercado  " + (i + 1 ) + "?")

  array[i] = itens
  
}



alert(array[2])
alert(array[1])
*/






/*
function calcular(BiOne,BiTwo,BiTree){

let validar = BiOne + BiTwo + BiTree / 3 ;

if(validar >= 6 ){
    alert("Passo mlkkkk")
}
else{console.log("Seja bem vindo ao desespero.")}

}



calcular()

*/





//jogo adivinhação



let tentativas = 0;
let result = prompt("tenta acertar o numero de 0 a 10 ?");

let gerador = Math.round(Math.random() * 10 )

const match = Number(result) == gerador; 


console.log()