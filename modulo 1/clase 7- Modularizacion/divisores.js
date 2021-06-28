let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt("Inserte un numero: ");
function divisores(n) {
    let contador, x;
    suma = 0;
    for (contador=1; contador<=n; contador++) {
        x = n%contador;
        if (x == 0) {
            suma = suma+1;
        }
    }
    return suma;
}
let divisores = divisores (numero);
console.log(divisores);