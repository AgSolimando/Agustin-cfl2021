//ALGORITMO SECRETO
let rl = require('readline-sync');
let elem, arr, nro, ocu;
elem = rl.questionInt('Ingrese tamaño: ');
arr = new Array(elem);

function cargar(arr,elem) {
    for (let i=0; i<elem; i++)
        arr[i]=Math.floor(Math.random()*100);
}
//OBTENGO DE UNA FUNCION "CARGAR" QUE ME CARGA EN UN ARREGLO, EN ESTE CASO: "arr", NUMERO AL AZAR ENTRE 0 Y 100 .
function mostrar(arr,elem) {
    let c="";
    for (let i=0; i<elem; i++)
        c+=arr[i]+" ";
    console.log(c);
}
//OBTENGO DE UNA FUNCION "MOSTRAR" QUE ME MUESTRA EL MISMO ARREGLO DE, INVOCANDO UN ESPACIO ENTRE ELEMENTOS
//ALMACENA EN UNA VARIABLE, ESTE: c, LOS VALORES DEL ARRAY y AGREGA ESPACIO.POSTERIORMENTE PIDO MOSTRAR LA VARIABLE DONDE ESTAN LOS VALORES SEPARADOS POR ESPACIO.
function metodo(arr,elem,nro) {
    let oc=0
    for (let i=0; i<elem; i++){
        if(arr[i]==nro)
            oc= oc+1
	}
	return oc;
}
//LA FUNCION "METODO", RECORRE EL ARRAY  CON NUMEROS AL AZAR(arr) y COMPARA CADA NUMERO DEL ARRAY CON UN NUMERO QUE LE PIDE AL USUARIO, SI ESE NUMERO QUE INGRESO EL USUARIO APARECE EN EL ARRAY LE DICE AL USUARIO CUANTAS VECES APARECIO..
cargar(arr,elem);
mostrar(arr,elem);
nro = rl.questionInt('Ingrese número: ');
ocu = metodo(arr,elem,nro);
console.log("El número "+nro+" aparece "+ocu+" vez o veces");