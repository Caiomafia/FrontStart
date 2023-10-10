// aperfeiçoando a resolução de problemas 


/*

1 Qual entrada de dados eu darei 
2 Quais as variaveis 
3 Qual o caminho ideal (fluxo de ideal fluxo grama())
4 Quais caminhos alterantivos . */


let Hello;

 let listar = [];

 let index = 0;


while(Hello != 3 )
{

Hello = Number( prompt("Seja bem vindo , o que você gostaria hoje ? 1 - cadastrar item  2 - Mostrar itens cadastrados  3 . sair do programa"));


switch (Hello) {
    case 1:
        let item = prompt("O  primeiro item ?")
         listar.push(item)

        break;

        case 2 :
            if(listar.length == 0 ){ alert("zero itens nessa lista , adicione um ")}
            else{alert(listar)};
            break;

        case 3 :
        alert("saindo do programa")
        break;

            default:
        alert("opção invalida")
            break;
}
}  