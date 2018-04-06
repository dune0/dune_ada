
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

