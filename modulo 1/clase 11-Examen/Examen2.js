let readlineSync= require("readline-sync");
let diasAño=365;
let dia= readlineSync.questionInt("ingrese un dia");
let mes= readlineSync.questionInt("ingrese un mes");
let año= readlineSync.questionInt("ingrese un año");
let diasMeses=[31,28,31,30,31,30,31,31,30,31,30,31]
// ESTABLEZCO VARIABLES DE DIA,MES Y AÑO, ASIGNO LA CANTIDAD DE DIAS DE CADA MES.
function noEsBisiesto(año){
	if((año%4==0)&&(año%100!=0)||(año%400==0)){
		return true;
	}
}
// MEDIANTE LA FUNCION ESPECIFICADA COMPRUEBO SI EL AÑO ES O NO ES BISIESTO, LUEGO DETENGO ESA FUNCION Y DEVUELVO EL VALOR
function contarDias(dia,mes){
	let suma=0;
	for(let i=0;i<mes-1;i++){
		suma=suma+diasMeses[i];
	}
	suma=suma+dia;
	return suma;
}
//MEDIANTE LA FUNCION COMPRUEBO EL MES Y LOS DIAS, DEVOLVIENDO LA SUMA PARA SU EJECUCCION.
noEsBisiesto(año);
console.log("la cantidad de dias que faltan hasta fin de año son:",diasAño-contarDias(dia,mes));
// EL RESULTADO POR CONSOLA ME OTORGA LA CANTIDAD DE DIAS QUE FALTARIAN PARA QUE FINALICE EL AÑO(NO BISIESTO).