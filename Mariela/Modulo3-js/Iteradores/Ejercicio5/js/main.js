/*Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], mostrar por pantalla el valor máximo y la cantidad de veces que se repite.*/

var numeros = [10,24,36,7,98,11,14,20,98,14,10]; 
var valormax = 0;
var contador= 0

for(var i=0;i<numeros.length;i++){
    if(valormax < numeros[i]){
       valormax = numeros[i];
    }
}

for(var i=0;i<numeros.length;i++){
	if(numeros[i]==valormax){
		contador++;
	}
}
console.log("El valor maximo es " + valormax , " y se repite " + contador);

/*
SIMPLIFICADO

var numeros = [10,24,36,7,98,11,14,20,98,14,10]; 
var valormax = 0;
var contador= 0

for(var i=0; i <numeros.length; i++){
	if(numeros[i]>valormax){
		valormax=numeros[i];
		contador=0;
	}

	if(numeros[i] == valormax){
		contador++;
	}
}

console.log("El valor maximo es " + valormax , " y se repite " + contador);

*/