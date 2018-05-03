/*
Parcialito 

La idea de este módulo es ejercitar lo que aprendimos hasta el momento. Para ello, vamos a plantear 2 ejercicios:

    Juan y Pedro son hermanos. La semana pasada tuvieron una prueba en el colegio y hoy la profesora les dio la nota. Escribir un programa que:
        Declare y asigne 2 variables de tipo número: una con la nota de Juan (10) y otra con la nota de Pedro (8). Nombrá a las variables como más te guste.
        Mostrar por la terminal el valor más grande de los 2.
        Considerá el caso de que pueden ser iguales. Si eso ocurre, mostrar el mensaje: 'Ambos hijos tuvieron la misma nota'.

    Casos que te pueden ayudar para probar:
        Si Juan se saca un 4 y Pedro un 6. Mostrar 6.
        Si Juan se saca un 9 y Pedro un 8. Mostrar 9.
        Si ambos se sacan un 7, mostrar 'Ambos hijos tuvieron la misma nota'.

    Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto 
    debe abonar el cliente aplicando el descuento si es necesario.

        Tip: Para obtener el porcentaje de un número podés usar la siguiente fórmula: número * descuento / 100 (La famosa regla de 3 simple).

    Si el monto de compra es de 500 pesos, ¿cuánto debe pagar el cliente?

    Casos que te pueden ayudar para probar:
        Si el monto de la compra es 55. Mostrar 55 (Es menor a 100, por lo que no se aplica descuento).
        Si el monto de la compra es 200. Mostrar 170, equivalente a 200 - descuento. Para calcular el descuento ya te dí una pista.

*/

var notaj = 10;
var notap = 8;

if(notaj>notap){
    console.log(notaj);
} else if(notaj<notap){
    console.log(notap);
} else{
    console.log('Ambos hijos tuvieron la misma nota');
}


var compra = 500;

if (compra > 100) {
    var descuento = compra * 15 / 100;

    console.log(compra - descuento);
} else {
    console.log(compra);
}
