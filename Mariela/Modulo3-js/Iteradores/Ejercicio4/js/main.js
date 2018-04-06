/*Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.*/

/*x = [10,24,36,7,98,11,14,20]*/

var numeros = [10,24,36,7,98,11,14,20]; //[0=10,1=24,2=36,3=7,4=98,5=11,6=14,7=20]
var valormax = 0;
var x = numeros.length;


for(var i=0,x=numeros.length;i<x;i++){
    if(valormax < numeros[i]){
        valormax = numeros[i];
    }
}

console.log("El valor maximo es " + valormax);