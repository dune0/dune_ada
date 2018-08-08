/* Todos los inputs son obligatorios */

function validar(e){

	e.preventDefault();

	var nombre = $('#nombre').val();
	var apel = $('#apel').val();
	var mail = $('#mail').val();

	console.log(nombre);
	console.log(apel);
	console.log(mail);
// Version 1

/* Si un campo vacio formulario invalido */

	/*if(nombre.length != 0 && apel.length != 0 && mail.length != 0){
		return true;
	}*/

// Version 2

	if(nombre.length == 0 || apel.length == 0 || mail.length == 0){
		
		let error = $('.error');

		$.each(error,function(indice,elemento){

			elemento.textContent = "Required";
			console.log(elemento);

	});

		return false;	
	}

/* Version 1 
	var pelis = Array.from($('.genero'));

	pelis.forEach(function(elemento,indice){

		if(elemento.checked){
			console.log("Elegiste esta opcion");
		}

	});

/* Version 2 */

var peliculas = $('.genero');

$.each(peliculas,function(indice, elemento){

	console.log(elemento);

    if(elemento.checked == true){
	
	console.log("Elegiste el siguiente genero: " + elemento.checked);
 
 	   }
	});

	return true;

}

$('#alquilar').on('click',validar);

$("#btnLimpiar").click(function(event) {
	$("form")[0].reset();
   });

/*
function(e){


	var nombre = $('#nombre').val();

	console.log(nombre);

	

	
});

*/

