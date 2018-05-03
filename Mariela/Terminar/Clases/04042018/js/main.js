var n = 1;

while(n <=10){

	console.log(n);
	n++;//postaccion
}

//
var n= 1;
while ((n>0) && (n<= 10)) {
	console.log(n)
	n++;
}
//

/*Imprimir los primeros 50 numeros pares*/
var n=1;

while(n<=50 && (n%2==0)){

	console.log(n);
	n++;
}

while(n<=50){
	if(n%2 == 0){
		console.log(n);
	}
	n++;
}

/*WHILE SE PUEDE USAR 0 O N VECES*/

/*FOR SE EJECUTA N VECES*/
inicio, condicion, postaccion

var i;

for (i = 1/*Inicio*/; i >= 50 /*Condicion*/; i++ /*Postaccion*/) {
	console.log(i);
}

for (i = 1; i <=50; i++){

	if(i%2 == 0){
		
		console.log(i);
	}
}