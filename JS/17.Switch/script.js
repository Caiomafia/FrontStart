//Substituição dos if e else , isso e usado para deixar o cod mais clean 

//teste 

const fruits = "limão";


switch(fruits){

case "Orange" : {
console.log("Custa 1:99 o kg");
break;}

case "Melancia":{

console.log("/Melancia está a 8:99 o kg");
break;}

case "melão":{
console.log(" melão está a 9:00 o kg");
break;}

default: {
console.log("Não foi encontrado a fruta ")
}
}


//sintaxe
/**
 * 
 switch (expression) {
  case value1:
    statements
  case value2:
    statements
  // …
  case valueN:
    statements
  default:
    statements
}
 */