$('#ejes').hide();

$('#tipo').on('change',e=>{

	let option = $('#tipo').val();

	if(option == "2"){
		$('#ejes').show();
	}
});

$('#cargar').on('click',e=>{

	e.preventDefault();  // evita el envio del form por GET

	let patente = $('#patente').val(); // recupero patente del form

	console.log(patente);

	let tipo = $('#tipo').val(); // me quedo con la opcion
 	
 	switch(tipo){
 		case '1': 
 				vehiculo = new Auto(patente);
 				break;
 		case '2': 
 				let ejes = $('#ejes').val();
 				vehiculo =new Camion(patente,ejes);
 				vehiculo.acelerar(20);
 				break;
 		default: 
 				alert("Elija una opcion valida");
 				break;
 	}


	// let auto = new Auto(patente); // creo un objeto auto

	// let auto2 = new Auto();

	console.log(vehiculo); // muestro el objeto completo

	console.log(vehiculo.patente); // muestro el atributo patente

});