/*Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.*/


var x = "Marzo";

if (x == "Febrero") {
  console.log (x + "...El mes tiene 28 dias");
} else if (x == "Abril" || x == "Junio" || x == "Septiembre" || x == "Noviembre") {
  console.log (x + "...El mes tiene 30 dias");
} else {
  console.log (x + "...El mes tiene 31 dias");
}