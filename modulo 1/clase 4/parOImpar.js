let readlineSync=require('readline-sync');
console.log("este programa te dice si es par o impar");
let numero = readlineSync.questionInt("indique un numero");
if ((numero % 2) == 0) {
    console.log(numero + 'es par');
} else {
   console.log(numero + "es impar");
}