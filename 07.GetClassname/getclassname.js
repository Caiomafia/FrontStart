//como transformar um dado em um array

//Array.from(selecionar o elemento que deseja alterar)

const itens = Array.from(document.getElementsByClassName('item')); //seleciona o item e faz virar um array

console.log(itens)

itens.forEach(item => {
item.addEventListener('click' , oneclick)
})

function oneclick (event){
console.log('click no item' ,event.target )
}



