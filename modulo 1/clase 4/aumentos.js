let readlineSync=require('readline-sync');
console.log("Este programa determina el aumento a aplicar");
let sueldo1 = readlineSync.questionFloat("$0 a $15.000");
let sueldo2 = readlineSync.questionFloat("$15.001 a $20.000")
let sueldo3 = readlineSync.questionFloat("$20.001 a $25.000")
if ((sueldo1 * 20)/100) {
 console.log(("el aumento de sueldo es de") + sueldo1);   
} else {)
    
}
if ((sueldo2 * 10)/100) {
    console.log(("el aumento de sueldo es de") + sueldo2);
} else {
    
}
if ((sueldo3 * 5)/100) {
    console.log(("el aumento de sueldo es de") + sueldo3);
} else {
    
}