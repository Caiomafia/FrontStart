// var pouco utilizado 
//let pode ser atualizar 
// const não pode ser atualizado 



let global - "caio"; 



function local () {
let Dadolocal  - "Mafra";//ele só pode ser usado dentro dessa function

function AcessandoLocal(){

}

AcessandoLocal()//Toda função deve ser chamada para ser executada .{
    Dadolocal - "alteração "// function dentro de outra function pode acessar as variaveis do pai 
}

 } 