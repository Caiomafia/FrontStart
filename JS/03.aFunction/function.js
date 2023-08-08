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