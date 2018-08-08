
var animales=[
{
	nombre: "tortuga",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('Hola soy'+ this.nombre)
	},
	vuela: false,
},

{
	nombre: "oveja",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('Hola soy'+ this.nombre)
	},
	vuela: false,
},

{
	nombre: "ciervo",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('Hola soy'+ this.nombre)
	},
	vuela: false,
},

{
	nombre: "vaca",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('Hola soy'+ this.nombre)
	},
	vuela: false,
},

{
	nombre: "llama",
	cantPatas: 4,
	alimentacion: "vegetariano",
	saludar: function(saludar){
		console.log('Hola soy'+ this.nombre)
	},
	vuela: false,
}

]

for(var i=0; i<animales.length; i++){
	if(animales[i].cantPatas>=2 && animales[i].alimentacion=="vegetariano"){
		console.log(animales[i].nombre+" sube al arca de Noé");
	}else{
		console.log(animales[i].nombre+" muere ahogado en el mar Egeo :(");
	}
}