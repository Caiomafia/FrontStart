/*
O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.



sintaxe: array.indeof(Elemento que deve ser procurar)

*/ 





const itens = ["salada" , "bananas " , " Feijão " , " Arroz" , "ovos" ]


console.log("o começo do indexOf : " , itens)

console.log(itens.indexOf("ovos")) //Qual o index o ovos estar

let index = itens.indexOf("ovos")

itens.splice(index , 1 )// pego o index do ovo , e agora coloco o slice para remover o elemento 


console.log("Esse vai ser o resultado " , itens)

//Deletar tudos 
itens.splice(0 , itens.length)
console.log("removendo todos os itens " , itens )






