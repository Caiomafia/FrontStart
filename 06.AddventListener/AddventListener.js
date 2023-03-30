// Para registrar mais de uma espera de evento como alvo, chame addEventListener() para o mesmo
// alvo mas com diferentes tipos de evento ou captura de parâmetros.

let nome = document.getElementById('name');
nome.addEventListener('click' , function(){ console.log('Caio Mafra') //add o evento do click para chamar o nome no console e trocar a palavra com id nome
nome.innerHTML = "caio mafra"


})
