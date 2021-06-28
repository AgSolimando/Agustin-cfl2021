let readline = require ("readline-sync");

let butacas = new Array(10)

butacas[0]= true;
butacas[1]= false;
butacas[2]= true;
butacas[3]= true;
butacas[4]= false;
butacas[5]= true;
butacas[6]= true;
butacas[7]= false;
butacas[8]= true;
butacas[9]= true;


let recorrido = (arreglo) =>{
    let indice;
    let suma=0;
    for (indice =0 ; indice < arreglo.length; indice ++){
        if (arreglo[indice] == false){
            suma= suma + 1
        }
    }
return suma
}

console.log (recorrido (butacas))