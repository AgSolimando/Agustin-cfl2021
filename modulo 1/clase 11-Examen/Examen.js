let readlineSync = require("readline-sync");
let texto=readlineSync.question("ingrese un texto");
let vocales= ["a","e","i","o","u"];
let consonantes=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
let consonantesTexto=[];
let vocalesTexto=[];
let arregloTexto= texto.toLowerCase().split(" ").join("").split("");
//SE DEFINEN LAS VARIABLES, LUEGO MEDIANTE EL METODO "TOLOWERCASE" CONVIERTO TODAS LAS PALABRAS EN MINUSCULAS
//MEDIANTE "JOIN" Y "SPLIT" SEPARO TODAS LAS LETRAS PARA SU DEVOLUCION.
function encontrarConsonantes(consonantes,letra){
	for(let i=0;i<consonantes.length;i++){
		if(letra==consonantes[i] && consonantesTexto.indexOf(letra)==-1)
			consonantesTexto.push(letra);
	}
}
// MEDIANTE INDEXOF DEVUELVO EL VALOR DE BUSQUEDA
function encontrarVocales(vocales,letra){
	for(let i=0;i<vocales.length;i++){
		if(letra==vocales[i]&& vocalesTexto.indexOf(letra)==-1)
			vocalesTexto.push(letra);
	}
}
// MEDIANTE INDEXOF DEVUELVO EL VALOR DE BUSQUEDA
function arreglo(arregloTexto){
	let letra;
	for(let i=0;i<arregloTexto.length;i++){
		letra=arregloTexto[i];
		encontrarConsonantes(consonantes,letra);
		encontrarVocales(vocales,letra);
	}
	console.log(consonantesTexto)
	console.log(vocalesTexto)
}
console.log(arregloTexto);
arreglo(arregloTexto);