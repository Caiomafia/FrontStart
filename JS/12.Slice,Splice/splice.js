/*
Mais complexo que seu primo nesse podemos , substituir , adicionar e remover elementos 


Sintaxe : array.slice(index , delete , add )


*/


const months = ['Jan', 'March', 'April', 'June'];
console.log("Teste com o splice : array" , months)

//Teste de substituição de jan por janeiro 

console.log("remover", months.splice(0, 1 , "janeiro"))
console.log(months)

