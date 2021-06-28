let readlineSync = require('readline-sync');
let ingresoClave = readlineSync.question('inserte la clave correcta');
let clave = "Eureka";
let intento = 1;
while ((ingresoClave != clave) && (intento < 3)){
    intento++; 
    ingresoClave = readlineSync.question('inserte la clave correcta'+" oportunidad"+intento); 
}
if (ingresoClave == clave){
    console.log("ha ingresado con exito")
    
} else {
    console.log("ha agotado las opciones")
}