/*




O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.


*/


//Criando um array
var frutas = ['maçã' , 'Banana' , 'orange' , 'abacate'];

console.log(frutas.length)//4 numero de itens dentro 


//acessar um item (index) do array

var primeira = frutas[0];
//maçã

var ultima = frutas[frutas - 3]
//abacate

// [ Iterar um array ]

frutas.forEach(function(item,indice,array){
    console.log('iterar:', item,indice);
})




//{adicionar no final do item do array}

var adicionar = frutas.push('limão');
console.log('Nova fruta:    ' , frutas)


//{remover final do array}

var remover = frutas.pop()//remove o limão 
//lista ficara com 4 frutas



//{Remover no inicio }

var primeiros = frutas.shift()//-removeu maçã


//{Procurar o índice de um item na Array}

frutas.push('Manga');
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf('Banana');
// 1


