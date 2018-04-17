
/*EJERCICIO 1*/
/*
  Un sistema de fidelización de usuarios implementa la siguiente regla para la adquisición de productos del catálogo. Se pide determinar la lógica de canje.
- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza directamente el canje.
- Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero, en ese caso cada peso equivaldrá a 3 puntos.
- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría premium, la relación pesos puntos será 1 a 5.*/

var pesos = 0;
var puntoscliente = 589; 
var puntosproducto = 1000; 
var premium = true; 

if (puntoscliente >= puntosproducto) {

  console.log("El cliente puede realizar el canje")

} else if ((puntosproducto / 2) < puntoscliente && premium == false) {

  pesos = (puntosproducto / 2) / 3;

  console.log("Pago el 50% del producto en puntos y completa el canje con " + pesos + " pesos")

} else if ((puntosproducto / 2) < puntoscliente && premium == true) {

  pesos = (puntosproducto / 2) / 5;

  console.log("Pago el 50% del producto en puntos y completa el canje con " + pesos + " pesos")
  
}

/*EJERCICIO 2*/
/*Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar la decisión tiene en cuenta distintas variables.
A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, por lo que para elegir esta opción el costo mensual deberá ser menor a $1500.
B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%, con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor de la cuota.
C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, pero es doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.*/

var kmdistancia= 12;
var costotransporte= 1400;
var almuerzo= 200;
var brindaAlmuerzo= true;
var costo= 1600;
var turnodoble= true;
var presupuestoTotal= costo/100*20

if (kmdistancia > 10 && costo < 1500){

	console.log("Tendra que contratar un transporte");
} else if(kmdistancia < 10){
	presupuestoTotal = costo + (costo / 100 * 20);
		if(almuerzo < almuerzo / 100 * 15){
			console.log("Incluira almuerzo");
		} else{
			console.log("No incluira almuerzo");
		}
} else if(kmdistancia > 10 && costo > 1500 ){
			turnodoble= true;
			brindaAlmuerzo= true;
	console.log("Asistira doble turno");
} else{
	console.log("No Asistira doble turno");
}

/*EJERCICIO 3*/
/*Dados distintas tarjetas de crédito, mostrar por consola la cantidad de cuotas sin interés según el siguiente criterio.
- Mastercard – hasta 6 cuotas s/interés
- Visa – hasta 9 cuotas s/interés
- Amex – hasta 3 cuotas sin interés
- Todas las demás - 1 cuota sin interés*/

var Mastercard = 6 cuotas;
var Visa = 9 cuotas;
var Amex = 3 cuotas;
var otrasTarjetas = 1 cuota;

if () {}