let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('ingrese un numero entero');
let num2 = readlineSync.questionInt('ingrese otro numero entero distinto al primero');
let suma = 0;

if(num1<num2){
    for(num1;num1<=num2;num1++){
    suma += num1;
    }
    
} else if (num2<num1){
    for(num2;num1>=num2;num2++){
        suma += num2;
        }
    }
console.log(suma);