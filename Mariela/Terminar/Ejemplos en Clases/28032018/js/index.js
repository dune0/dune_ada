/*Tomar dos variables, si ambas son mayores de 10, entonces los sumo, sino los multiplico*/
/*primero definimos las variables*/
x = 8;
y = 11;
suma= 0;

if (x>10 && y>10) {

		z = x+y; /*Ejecuto la suma solo si ambas variables cumplen*/

}else{
		z = x*y; /*Ejecuto siempre que al menos una sea menor que 10*/
}
console.log("El resultado es: "+z);

/*Sumar dos variables si al menos una de ella es mayor a 10, de lo contrario, multiplicamos*/

if (x>10 || y>10) {
	z = x+y;
}else{
	z = x*y;
}
console.log("Resultado:" +z);

/*Mostrar mensaje de bienvenida incluyendo nombre y apellido, solo si coinciden con los valores "Belen" y "Alegre"*/
 
 nombre = "Belen";
 apellido = "Alegre";
 bienvenida = " ";
 console.log(bienvenida);
 
 if (nombre=="Belen" && apellido=="Alegre") {
 	Bienvenida= "Bienvenida a ADA "+nombre+" "+apellido;
	console.log(Bienvenida);
}