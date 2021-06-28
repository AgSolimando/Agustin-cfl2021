let readlineSync=require('readline-sync');
let precioProducto= readlineSync.questionInt("Ingrese el precio del producto");
let porcentajeDescuento = readlineSync.questionInt("Ingrese el porcentaje de descuento");
let promedioEnDecimales = (100-porcentajeDescuento)/100;
let precioFinal = precioProducto * promedioEnDecimales;
console.log("El precio final del producto es", precioFinal);