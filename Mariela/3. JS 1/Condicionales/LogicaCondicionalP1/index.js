/*EJERCICIO 1*/
/*Dada una variable x, determinar si es par o impar.*/

var n = 247658769870

if (n % 2 == 1) 
{
	console.log("El numero es impar");
} else{
	console.log("El numero es par");
}

// 1 NUMERO IMPAR - 0 NUMERO PAR

/*EJERCICIO 2*/
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

/*EJERCICIO 3*/
/*Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.*/


var x = "Marzo";

if (x == "Febrero") {
  console.log (x + "...El mes tiene 28 dias");
} else if (x == "Abril" || x == "Junio" || x == "Septiembre" || x == "Noviembre") {
  console.log (x + "...El mes tiene 30 dias");
} else {
  console.log (x + "...El mes tiene 31 dias");
}

/*EJERCICIO 4*/
/*Dados tres números determinar si es positivo o negativo.*/

var x = 7;

if (x >= 0) {
  console.log (x + " es un numero positivo");
} else {
  console.log (x + " es un numero negativo");
}

/*EJERCICIO 5*/
/*Dada una variable que puede ser una letra, determinar si es una vocal.*/

var x= "m"

if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){

  console.log ("La letra " + " ' " + x + " ' " + " es vocal.");

} else {

  console.log ("La letra " + " ' " + x + " ' " + "  no es vocal.");

}

/*EJERCICIO 6*/

/*Dados tres números, x-y-z, si X es mayor que Y calcular la resta entre X y Z, y determinar si eso es mayor que Y, de lo contrario sumar X y Z (x+z) y multiplicarlo por Y.*/

var x,y,z,w;

if (x > y) {

	w= x - z;

	console.log("W es la resta"+w);

if (w > y){
	
	console.log("W es mayor que Y"+w);

}else{
	
	w = (x + z)*y;
    
    console.log("W es menor que Y"+w);

}

}

/*Version 2

if(x > y){

	w=x - z;

	console.log("w es la resta"+w);
}

No me sirve porque w podria ser undefined

if (w > y){ // if(w!="undefined")

	console.log("w es mayor que y");
}else{

	w = (x + z)*y;
	
	console.log("w es mayor que y"+w);
}
*/

/*EJERCICIO 7*/
/*Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, se deben realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%*/

var sueldo= 40000;
var antigüedad= 12;
var aumento= 0;


if (antigüedad > 10) {
  aumento = sueldo + (sueldo / 100 * 10);
} else if (antigüedad < 10 && antigüedad > 5){
  aumento = sueldo + (sueldo * 7 / 100);
}else if (antigüedad < 5 && antigüedad > 3){
  aumento = sueldo + (sueldo / 100 * 5);
}else {
  aumento = sueldo + (sueldo / 100 * 3);
}

console.log ("El sueldo que le corresponde es  de $" + aumento + ".")