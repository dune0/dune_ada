/*Determinar si un numero es primo*/ 

var num = 23; //num -1, en este caso es 22
var cont = 2;
var esprimo = true;

while ((cont > 1 && cont < num) && esprimo== true){

	resto = num%cont;

	if (resto == 0){
    //console.log("No es primo")
    esprimo = false;
}
	cont++;
}

if (esprimo == false){
	console.log("No es primo");
} else {
	console.log("Es primo");
}

/*Los conejos de Fibonacci*/ //0 1 1 2 3 5 8 13 21 34 55 89 144 233

/*Los conejos de Fibonacci con FOR*/
var x = 1;
var y = 0;
var cont= 0;

for (var i = 0; i <10; i++){
	console.log(cont);
	y = cont;
	cont= cont + x;
	x=y;
}

//x= x + (x-1)

/*
i  cont  y   x
0    0   1   0
     1   0   0  //finaliza la primera vuelta
1    1   1   1
2    2   1   1
3    3   2   2
4    5   3   3
5    8   5   5
6   13   8   8
7   21  13  13
8   34  21  21
9   55  34  34
10  89  55  55
11 144  89  89
12 233 144 144
*/

/*Los conejos de Fibonacci con WHILE*/

var numero = 0;
var firstnum = -1;
var lastnum = 1;

while(numero < 11){
	numero = firstnum + lastnum;
	firstnum = lastnum;
	lastnum = numero;
	console.log(numero);
}

/*
numero | numero<11 | numero= firstnum + lastnum | firstnum
0        true             0=     1    +    1(0)

numero | firstnum | lastnum 
0        -1         1
0         1         0
1         0         1
1         1         1
2         1         2
3         2         3
5         3         5
8         5         8
*/


/*
EJEMPLO

Ver Semana (array)
|15.20|25.00|
| 0   | 1   | 2 | 3 | 4 | 5 |  

Array - n Tamaño
      - i Indice
0 <= indice <= n-1

Semana [1] 25.00
Semana [6] error

array.lengh 

for(i=0, i<semana.lengh, i++){
console.log(semana[i]);
}

ver semana=[15.20, 25.00, 32.80]

array estatico -
array dinamico -
*/




































