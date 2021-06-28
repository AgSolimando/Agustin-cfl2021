let readlineSync = require('readline-sync');
let dados = readlineSync.questionInt("Dados a lanzar?: ");
let probNum = 6;
let probFinl = 1;
let contador;
for (contador=1; contador<=dados; contador++) {
    probFinl = probFinl*probNum;
}
console.log("Su probabilidad es: 1/",probFinl);