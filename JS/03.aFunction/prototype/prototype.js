/*
    prototype 


    * prototype-based languege
    *  prototype chain 
    *  _proto_
    

*/ 


// Definindo uma função de construtor para criar objetos
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  // Adicionando um método ao protótipo da função de construtor


  
  Pessoa.prototype.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  };
  
  // Criando objetos usando a função de construtor
  const pessoa1 = new Pessoa("João", 30);
  const pessoa2 = new Pessoa("Maria", 25);
  
  // Chamando o método do protótipo para ambos os objetos
  pessoa1.apresentar();
  pessoa2.apresentar();



  /*
  Neste exemplo, temos uma função de construtor Pessoa que cria objetos com propriedades nome e idade. Um método chamado apresentar é adicionado ao protótipo da função de construtor, que imprime uma mensagem de apresentação. Dois objetos, pessoa1 e pessoa2, são criados usando a função de construtor e o método apresentar é chamado para ambos.
  
  Espero que este exemplo seja útil! Se você tiver mais perguntas ou precisar de ajuda adicional, fique à vontade para perguntar.
  
  não entendi o que e prototype
  
  Peço desculpas por não ter explicado o conceito de protótipo adequadamente. Vou tentar esclarecer.
  
  Em JavaScript, cada objeto tem uma referência para um objeto "protótipo". O protótipo é um objeto a partir do qual o objeto herda propriedades e métodos. Isso permite a criação de cadeias de */