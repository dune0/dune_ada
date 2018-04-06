/*Dada una variable y que puede contener un número de 1 a 7, determinar a que día de la semana corresponde. Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).*/

var n = 0;


if (n==1) {
	console.log("El dia de la semana es Lunes")
} else if (n==2) {
	console.log("El dia de la semana es Martes")
} else if (n==3) {
	console.log("El dia de la semana es Miercoles")
} else if (n==4) {
	console.log("El dia de la semana es Jueves")
} else if (n==5) {
	console.log("El dia de la semana es Viernes")
} else if (n==6) {
	console.log("El dia de la semana es Sabado")
} else if (n==7) {
	console.log("El dia de la semana es Domingo")
} else if(n==0) {
	console.log("No corresponde a un dia de la semana")
}

/*
switch(x) {
case 1:
console.log("Es Lunes"); 
break;
case 2:
console.log("Es Martes");
break;
case 3:
console.log("Es Miercoles");
break;
case 4:
console.log("Es Jueves");
break;
case 5:
console.log("Es Viernes");
break;
case 6:
console.log("Es Sabado");
break;
case 7:
console.log("Es Domingo");
break;
default:
console.log("No corresponde a ningun dia de la semana.")
}
*/