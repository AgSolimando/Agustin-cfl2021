let readlineSync = require('readline-sync');

let base= readlineSync.questionInt('ingrese una numero ');
let exponente= readlineSync.questionInt('insertar el exponente ');


while(exponente<0){
    exponente= readlineSync.questionInt('inserteel exponente, para que sea valido tiene que ser ');
}

let resultado=calcularPot(base,exponente);
console.log(" el calculo tiene como resultado"+resultado);

function calcularPot(num1,num2){
    return num1**num2;
}