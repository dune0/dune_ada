/*Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.*/

/*x = [10,24,36,7,98,11,14,20]*/

var pos = 0;
var numeros = [10,24,36,7,98,11,14,20]; //[0=10,1=24,2=36,3=7,4=98,5=11,6=14,7=20]
var valormax = 0;

for(var i=0;i<numeros.length;i++){
    if(valormax < numeros[i]){
       valormax = numeros[i];
       pos= i;
    }
}
console.log("El valor maximo es " + valormax);
console.log("Su posición es " + pos);

/*EJEMPLO CON NOMBRES
var nombres = ['Pepe', 'Pirulo', 'Lalo', 'Euclides']
var x= 'Lalo'

if(nombres.indexOf('Euclides')>-1){
	console.log('Euclides esta en la lista de nombres');
} else {
	console.log('Euclides no esta');
}

for (var i =o;1<nombres.lenght; i++){
	if (nombres[i] == x){
		console.log(nombres[i]) + "esta en la posición" + 1 +)
	}
    break;
i++;
}

var nombres = ['Pepe', 'Pirulo', 'Lalo', 'Euclides']
var esta = false;
var i = 0;

while (esta == false && i<nombres.lenght){
	if(nombres[i] ==x){
		esta == true;
	}
	i++;
}

if (esta){
	console.log("Esta!");
}
*/