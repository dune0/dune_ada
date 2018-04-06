/*Ana desea inscribir a su hijo Tomás a la colonia de vacaciones, para tomar la decisión tiene en cuenta distintas variables.
A) Si la colonia queda a más de 10 km, tendrá que contratar un transporte, por lo que para elegir esta opción el costo mensual deberá ser menor a $1500.
B) Si la colonia queda a menos de 10 km, su presupuesto total se incrementa en un 20%, con lo cual evaluará incluir almuerzo en la colonia si este no excede el 15% del valor de la cuota.
C) Finalmente, si la colonia está más lejos de 10km, y su costo es mayor a $1500, pero es doble turno y le brinda almuerzo, está dispuesta a pagar hasta $2800.*/

var kmdistancia= 5;
var costotransporte= 1400;
var almuerzo= 200;
var costo= 1400;

if (kmdistancia<= 10 && costo< 1500){
	console.log("Debe contratar un transporte");
} else if(kmdistancia>=10){
	var presupuesto=costo + ((costo / 100)*2)
} while ()