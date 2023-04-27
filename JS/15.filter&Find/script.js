//TEste para o exemplo 


const clients = [


    {name:"Caio" , lastname:"Henrique" , age:'28'},
    {name:"Ana" , lastname:"Silva" , age:'20'},
    {name:"Gabi" , lastname:"Gol" , age:'18'},
    {name:"Caio" , lastname:"Alves" , age:'17'},
    {name:"gi" , lastname:"Mafra" , age:'16'},
];

const numbers = [1,2,3,4,5,6,7];


/*fild e filter*/

console.log(clients.find(item => item.name === "Caio"));






//find vc coloca ele para procurar a palavra selecioanda (selecionar qual name vc quer , dois igual so retornar o 1@ da lista)


// melhorando usando parametros  Parte 2 da aula 

                                       // parte dos sinais 

const isGreater = (item) => item.name === "Caio";
console.log(clients.filter(isGreater))



//Teste retornar todos os nomes e completo 

const namecompled = (item) => `${item.name} ${ item.lastname}`;

console.log(clients.filter(namecompled))