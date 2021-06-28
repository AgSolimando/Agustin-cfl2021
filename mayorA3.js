let readlineSync = require('readline-sync');
console.log("este programa te dice que numero es mas grande")
let primerNumero = readlineSync.questionInt("seleccione primer numero");
let segundoNumero = readlineSync.questionInt("seleccione segundo numero");
let tercerNumero = readlineSync.questionInt("seleccione tercer numero");
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {;
    
} else {
    
}
console.log ("este numero es el mayor");