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


//Fazer um jogo de adivinhaçao de 0 a 10 , gerar esses numeros e fazer com que retorno quantas tentavias e retorno ao cliente.


let result = prompt("tenta acertar o numero de 0 a 10 ?");

const randomNumber = Math.round(Math.random() * 10 )

const match = Number(result) == randomNumber; 


let xAttemts =  1;

while(Number(result) != randomNumber ){
    result = prompt(' Erro , Tente novamente'); 
    xAttemts ++ 
}


alert(`Parabens  o número que pensei foi ${randomNumber} é você adivinhou em ${xAttemts}  tentativas `)

/* 
Aprendemos sobre 
controle de fluxo da aplicação 
estrutura de repetição 
while 
gerar numeros aletorios 
tipo de dados (NAN)
-não e um numero 
Tipo de erro :SyntanxError
- erro de sintaxe ; erro de escrita de codigo 
[]Math.round(aredonda para cima )]Match.rondom(gera um numero )  Match 
- pacote com funcionalidades matematicas ]
[]console . [
    - pacote com funcionalidades para console de devtools(browser)
]




*/