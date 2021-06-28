let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
console.log("numero:" + numero);
let max = numero;

while (numero != 0) {
    numero = readlineSync.questionInt('ingrese un numero entero distinto de 0, o este para salir');
    console.log("numero:" + numero);
    if (numero > max) {
        max = numero
    }
}
console.log("el maximo valor ingresado por el usuario es el: "+max);