var miObjeto = {
	clave: valor,
};

var gabi={
	edad: 26,
	gustos:["programar", "tocar la guitarra", "cocinar"]
};

gabi.edad;
gabi['edad'];

/*
gabi.edad;
var propiedadASeleccionar = 'edad';
gabi[propiedadASeleccionar];
*/

var gabi = {
	edad:26;
	gustos: {
		cocina: ["hamburguesas", "sandwiches"]
	},
};

gabi.gustos.cocina[1] //hamburguesas

gabi.edad= 27; // cambiar edad
gabi['altura']= 186; // agregar altura al key