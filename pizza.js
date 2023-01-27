//cirar variavel modalKey sera global
let modalKey = 0

//Variavel para controlar a quantidade inicial de pizzas no moodal 
let quantPizzas = 1 

let cart = []//carrinho


/*funções auxiliares */ 
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)


const formatoReal = (valor) =>{
    return valor.toLocaleString('pt-BR' , {style:'currency'  , currency:'BRL' })
}


const valorMonetario = (valor) => {   if(valor) { return valor.toFixed(2)}}


const abrirModal = () =>{
    seleciona('.pizzaWindowArea').style.opacity = 0 //Transparencia 
    seleciona('.pizzaWindowArea').style.display = 'flex'
    setInterval(() => { seleciona('.pizzaWindowArea').style.opacity = 1} , 150)
}


const fecharModal = () =>{
    seleciona('.pizzaInfo--cancelButton ').style.opacity = 0 //Transparencia 
    setInterval(() => {seleciona('.pizzaWindowArea').style.display = 'none' } , 50000)
    
        
}

/*obotão fechar */
const botoesfechar = () => {
    selecionaTodos('.pizzaInfo--cancelButton , .pizzaInfo--cancelMobileButton ').forEach(item => {
        item.addEventListener('click' , fecharModal)
        
    });
} 



const preencheDadosDasPizzas = (pizzaItem, item, index) => {
    // aula 05
    // setar um atributo para identificar qual elemento foi clicado
	pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = formatoReal(item.price[2])
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
}

const preencheDadosModal = (item) => {
    seleciona('.pizzaBig img').src = item.img
    seleciona('.pizzaInfo h3').innerHTML = item.name
    seleciona('.pizzaInfo--desc').innerHTML = item.description
    seleciona('.pizzaInfo--actualprice').innerHTML = formatoReal(item.price[2])

} 


const pegarKey = (e) => {
    // .closest retorna o elemento mais proximo que tem a class que passamos
    // do .pizza-item ele vai pegar o valor do atributo data-key
    let key = e.target.closest('.pizza-item').getAttribute('data-key')
    console.log('Pizza clicada ' + key)
    console.log(pizzaJson[key])

    // garantir que a quantidade inicial de pizzas é 1
    quantPizzas = 1

    // Para manter a informação de qual pizza foi clicada
    modalKey = key

    return key
}



const preemcherTamanhos = (key) => {
    // Ações nos botões de tamanho
    // selecionar todos os tamanhos
    selecionaTodos('.pizzaInfo--size').forEach((size,sizeindex) => {
        size.addEventListener('click' , () => {
            // clicou em um item, tirar a selecao dos outros e marca o q vc clicou
            // tirar a selecao de tamanho atual e selecionar o tamanho grande
            seleciona('.pizzaInfo--size .selected').classList.remove('selected')
            // marcar o que vc clicou, ao inves de usar e.target melhor usar  size, pois ele é nosso item dentro do loop
            size.classList.add('selected')

            //mudar o preco de acordo com o tamanho 
            seleciona('.pizzaItem--actualprice').innerHTML = formatoReal(pizzaJson[key].price[sizeindex])
        })
    })
}



const mudarQuantidade = () =>{
    //Ação do btn + e - 
seleciona('.pizzaInfo--qdmais').addEventListener('click' , () => { 
    quantPizzas++
    seleciona('.pizzaInfo--qt').innerHTML = quantPizzas
})

seleciona('.pizzaInfo--qdmenos').addEventListener('click' , () => { 
    if(quantPizzas > 1 ){ 
    quantPizzas--
    seleciona('pizzaInfo--qd').innerHTML = quantPizzas
}
})

}

//MAPEAR pizzajson para gerar a lista de pizzas 
pizzaJson.map((item,index) => {

    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)

    //colocando as pizzas 
seleciona('.pizza-area').append(pizzaItem)

 // preencher os dados de cada pizza

    preencheDadosDasPizzas(pizzaItem,item,index)

// pizza clicada

pizzaItem.querySelector('.pizza-item a ').addEventListener('click' , (e) => {
e.preventDefault()

let chave = pegarKey(e)



  // abrir janela modal
  abrirModal()

  // preenchimento dos dados
  preencheDadosModal(item)

  // aula 05
  // pegar tamanho selecionado
  preencherTamanhos(chave)

  // definir quantidade inicial como 1
  seleciona('.pizzaInfo--qt').innerHTML = quantPizzas

  // selecionar o tamanho e preco com o clique no botao
  escolherTamanhoPreco(chave)
  // /aula 05





})

botoesfechar()




})//Fim do mapear



mudarQuantidade()






