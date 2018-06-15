/*Challenge uno*/
var pos = 0;
var numeros = [1,3,3]; //[0=10,1=24,2=36,3=7,4=98,5=11,6=14,7=20]
var valormax = 0;

for(var i=0;i<numeros.length;i++){
    if(valormax < numeros[i]){
       valormax = numeros[i];
       pos= i;
    }
}
console.log("El valor maximo es " + valormax);
console.log("Su posición es " + pos);

/*Foobar*/
/*
var numeros= 15;
var arrayNum = [];
var i;
*/
function fooBar(num){
	var numeros = [];

		for (var i = 1; i <= numeros; i ++) {
			if (i % 3 === 0){
				numeros[i] = "Foo"
			}else if(i % 5 === 0){
				numeros[i] = "Bar"
			} else if(i % 3 === 0 && i % 5 === 0){
				numeros[i]= "FooBar"
			}else{
				console.log([i])
			}
	return numeros;
	}
};

console.log(fooBar(15));

