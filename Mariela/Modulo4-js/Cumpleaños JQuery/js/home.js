const rutaImg = "img";
//Traigo en string la info de localStorage
var cumplesStorage = localStorage.getItem("cumples");
//Recupero el json - objeto js
var jSon = JSON.parse(cumplesStorage)
// Me quedo con el arreglo de cumples
var cumples = jSon.cumples;


/**
 *	Recupero los cumples guardados
 **/

function proximosCumples(){

	$.each(cumples,function(index,elem){

		let li = `<li><p><span>${elem.fechadenac}</span>${elem.nombre}</p><a href="#" class="borrar" data-id="${index}">Delete</a></li>`;
		$('#cumples').append(li);		
		
	});
}	

function cumpleDelDia(){

// Excluye el limite superior 
	let indice = Math.floor(Math.random() * cumples.length);
/*
	while(indice == cumples.length){
		indice = Math.floor(Math.random() * cumples.length);		
	}	
*/
	let cumpleHoyImg  = cumples[indice].imagen;	
	let cumpleHoyName = cumples[indice].nombre;

	let h1 = `<h1>${cumpleHoyName}</h1>`;
	let img = `<img src="imagenes/${cumpleHoyImg}.png">`;

	$('#cumple-dia').append(h1);
	$('#cumple-dia').append(img);
}
/*
$('.borrar').on('click',e=>{

	e.preventDefault();
	let li = $(this);
	li.parent().remove(); // borro del HTML
	let indice = li.data('id');
	cumples.splice(indice,1);
	jSon.cumples = cumples;
	jSon.total = cumples.length;
	//Convierto en cadena de caracteres
	let datos = JSON.stringify(jSon);
	locaStorage.setItem("cumples, datos");
	// Guardar en el locaStorage

});
*/
$(document).on('click','ul button', function(e){
    
    console.log("aqui");
	e.preventDefault();
	let li = $(this);
	li.parent().remove(); // borro del HTML
	let indice = li.data('id');
	cumples.splice(indice,1);
	jSon.cumples = cumples;
	console.log(jSon);
	jSon.total = cumples.length;
	//Convierto en cadena de caracteres
	let datos = JSON.stringify(jSon);
	//lo guardo en el localStorage
	locaStorage.setItem("cumples", datos);
});

$(document).ready(function(e){

cumpleDelDia();
proximosCumples();

});



//"Cadena" (cadena normal con comillas dobles)/ 'cadena' (cadena normal con comillas simples)/ `cadena` (template string),
//"Nombre:"+cumple 
//`cadena ${cumple}`