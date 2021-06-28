let readlineSync=require('readline-sync');
console.log(" este programa te dice si se aplica el descuento o no");
let precioUnitario = readlineSync.questionFloat("ingresar el precio unitario");
let cantidad = readlineSync.questionFloat("ingresar cantidad y mes");
if (descuento = (precioUnitario * 15)/100){;
    console.log(("corresponde descuento si la cantidad es") + cantidad);
}