let readline = require ("readline-sync");

let vector1 = new Array(6)

let vector2 = new Array(6)

let indice;
for (indice = 1; indice <=6; indice ++){
    vector1[indice] = readline.questionInt ("Ingrese el numero "+ indice+ " del primer vector: ");
    vector2[indice] = readline.questionInt ("Ingrese el numero "+ indice+ " del segundo vector: ");
    
}

let suma  = new Array(6)
for (indice=1; indice <=6; indice++){
    suma[indice]= vector1[indice]+vector2[indice]
}
for (indice=1;indice<=6;indice++){
    console.log ("La suma del numero ", indice," de los vectores es: ", suma[indice])
}