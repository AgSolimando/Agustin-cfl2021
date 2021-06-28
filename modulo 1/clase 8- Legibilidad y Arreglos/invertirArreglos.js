let readline = require ("readline-sync");

let n = readline.questionInt ("Ingrese el tamaño del arreglo: ");

let numeros = new Array(n);
let invertidos = new Array (n);
let indice;

for(indice=n; indice >=1; indice--){
    numeros[indice]= readline.questionInt ("Ingrese el valor")
}



for(indice=1; indice <=n; indice++){
    console.log (numeros[indice]);
}