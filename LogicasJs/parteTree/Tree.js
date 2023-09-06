const pacietes = [
    {name:'Caio' , age :150 , peso: 45, },
    {name:'Geraldo' , age :180 , peso: 85, },
    {name:'Ana' , age : 190, peso: 95, },
    {name:'Luiza' , age : 190, peso:105 , },
]





function calculo()
{
alert(`
Pacientes ${pacietes.name} possui um imc de 
${
    (pacietes.peso / ((pacietes.age / 100 ) ** 2)).toFixed(2)}

`)}



for( let novopacientes of pacietes){
    calculo(novopacientes)
}



