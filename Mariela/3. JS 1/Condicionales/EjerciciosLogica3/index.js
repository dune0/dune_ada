
//Ejercicios de aplicación de lógica.
/*
Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina que consta de 2 semáforos para vehículos y dos semáforos peatonales.
*/
var semaforoVehiculos1 = "Rojo"
var semaforoPeatones1= semaforoVehiculos1

var semaforoVehiculos2 = "Verde"
var semaforoPeatones2 = semaforoVehiculos2

var semaforoParaCiegos = false;

 if (semaforoVehiculos1 == "Verde"){
 	semaforoVehiculos2 = "Rojo";
 	semaforoPeatones2 = "Stop";
 	console.log("Puede cruzar");
 } if (semaforoVehiculos1 == "Rojo"){
 	semaforoVehiculos2 = "Verde";
 	semaforoPeatones2 = "Walk";
 	console.log("No puede cruzar");
 }


/*
Ejercicio 2: Incorporar al ejercicio anterior un semáforo para ciegos, esto implica la posibilidad de tener modificar el estado de los semáforos en un momento dado.
*/
 if (semaforoVehiculos1 == "Rojo" && semaforoParaCiegos == true){
 	console.log("Los semaforos cambian a favor del peaton no vidente SIEMPRE")
 } else {
 	console.log("Los semaforos NO cambian")
 }

/*
Ejercicio 3: Modelar con lógica y estructuras conocidas un juego de preguntas y respuestas, que conste de:
- 3 rondas de 5 preguntas cada una.
- Para pasar de ronda deben responderse correctamente 3 preguntas por ronda
*/

var cont= 0;
var ronda= 0;
var preguntas= 0;

/*
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
*/

/*
Ejercicio 4: A partir del ejercicio anterior, incorporar las siguientes condiciones:
- El valor de las respuestas correctas en la primera ronda será de 5 puntos, en la segunda 10 y en la tercera 15.
- Al finalizar el juego se mostrará un cartel al jugador de excelente si consiguió entre 125 y 150 puntos, muy bien entre 100 y 124 puntos y bien para menos de 124 puntos.
*/