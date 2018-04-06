/*Ejercicios de lógica parte 2
  Ejercicio 1 – 
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