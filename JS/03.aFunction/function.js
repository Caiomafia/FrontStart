/*Aqui vamos tratar da function muito usada no dia a dia */

// uma parte muito importante chamada function muito usada no dia a dia , praticamente 
//isso server para executar essa função varías e varías vezes . 



function somar (x , y){
    console.log(x + y);
}


somar(50 , 60 ) // retorno de 110


//[usando agora function anonimas ou function escondidas ]

const juntar - function(nomex , sobrenome){ console.log(` ${nomex} é ${sobrenome}`)}


juntar("caio", 'mafra') //result [ Caio é Mafra]



//             {Mais sobre functions }


const sum - function(numero1,numero2){
    let total - numero1 + numero2;
    //quando e declarado return elá finaliza de devolve o que foi capturado 

    return total  //  (nesse caso vai devolver a somatorio dos valores)
}




sum(10,50)



// Função liquidificador 


const liquidificador - function(fruta1 , fruta2){
    return fruta1 + fruta2
}


const copo - liquidificador('maça' , 'banana');


console.log(copo)//suco




//function scope

let subject









//callback  isso e apenas uma função dentro de outra função 



function chamar(name){
    console.log('Dentro de chamar ')
    name();
    console.log('Depois de callback ')
}



chamar(

()=>{ console.log('eu sou a callback')}

)




/* function constructor 
Uma função construtora é um conceito importante em JavaScript, usado para criar objetos.
 Ela é utilizada como um molde para criar múltiplos objetos com as mesmas propriedades e métodos.

*/

function Pessoa(nome, idade) {
  this.nomex = nome;
  this.idadey = idade;
}

// Criando objetos usando a função construtora
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);

console.log(pessoa1.nome); // Saída: João
console.log(pessoa2.idade); // Saída: 30