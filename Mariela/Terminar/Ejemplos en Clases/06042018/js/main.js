/*Generar funcion de login*/
/*Duelve true en caso de logueo y false en caso contrario*/
/*Crear una array de usuarios y otro de contraseñas y */
function validar(usuario, password){

	if(usuario == "pepe" && password == 1234){

		return true;
	} else {

			return false;
	}
}

 function login (usuario, password){
 	var cantidad = 0;
 	var valido = validar (usuario, password);
 	while (valido == false && cantidad <3){
 		console.log("Usuario Invalido");
 		cantidad++;
 		valido = validar(usuario, password);
 	}

	if (valido) {console.log("Bienvenido");}

	if (cantidad == 3 && !valido) {console.log("Usuario Bloqueado");}
 } /*cierra la funcion loguin*/

 login("pepe", 1234);

 /*
var cantidad = 0;
var valido = validar("pepe", 1234);

 while (valido == false && cantidad < 3){

 	console.log("Usuario Invalido");
 	cantidad++;
 	valido = validar("pepe", 1234);
}

if (valido) {console.log("Bienvenido");}

if (cantidad == 3 && !valido) {console.log("Usuario Bloqueado");}
}

*/

