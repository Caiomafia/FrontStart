/*O método map() invoca a função callback passada por argumento para
 cada elemento do Array e devolve um novo Array como resultado.


Sintaxe : array.map(callbak[, thisArg])



 */


let numbers = [1,2,3,4,5,6]


console.log("Array normal : " , numbers , 
"Array com o map ") 
                //valor , index,array 
console.log(numbers.map((value,index,array) => value *2 ))



let names = ["Caio" , "henrique " , "mafra"] //array string 
console.log(names.map((value,index,array)  => value + "isa"))//todo string vai ter que ter isa no fim 



//Atividade com um array mais completo , juntar os dois nomes 


let clientes = [ {name:"Caio" , lastname:"Mafra"} , {name:"Anne" , lastname:"Sheilla"}]


console.log(clientes.map( el =>el.name + " " + el.lastname ))

//String

clientes.map((el) => )
