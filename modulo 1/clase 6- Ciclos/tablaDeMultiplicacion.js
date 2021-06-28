let readlineSync = require('readline-sync');
let factor = readlineSync.questionInt('ingrese un numero entero entre 1 y 9 como valor del multiplicando');
let multiplicador = readlineSync.questionInt('ingrese nuevamente un numero entero entre 1 y 9 como valor del multiplicador');
let resultado = 0;

for (let i = 1; i <= multiplicador;i++) {
    resultado = factor*i;
    console.log(factor+" * "+i+" = "+resultado);
}