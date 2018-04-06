/*Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.*/

var numeros = [10,24,36,7,98,11,14,20]; //[0=10,1=24,2=36,3=7,4=98,5=11,6=14,7=20]
var valormax = 0;
var x = numeros.length


for(var i=0,x=numeros.length;i<x;i++){
    if(valormax < numeros[i]){
        valormax = numeros[i];
    }
}

console.log("El valor maximo es " + valormax);

/*
for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}
*/