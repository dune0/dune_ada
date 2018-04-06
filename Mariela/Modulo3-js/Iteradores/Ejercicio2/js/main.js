/*Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor que coincida con el índice en las posiciones impares.*/

var N = 10
var numeros = []

for (i=0; i<N; i++) {
	
    if (i % 2 == 0){	
	numeros[i]= 0;
	}else{
	numeros[i]= i;

	}
	console.log(numeros[i]);
} 


