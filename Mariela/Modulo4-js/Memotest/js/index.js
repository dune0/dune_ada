/*var jugador = $('#nombrejugador')

function validar(){
  if (jugador ==''){
  		alert('Ingrese un nombre');
		return false;
		} else return true; 
     
    console.log(jugador);
}
*/

//$('.carta').on('click', function(){})

var tiles =
["img/mulder_uno.jpg", "img/mulder_dos.jpg", "img/mulder_tres.jpg", "img/mulder_uno.jpg", "img/mulder_dos.jpg", "img/mulder_tres.jpg", 
"img/scully_uno.jpg",  "img/scully_dos.jpg", "img/scully_tres.jpg", "img/scully_uno.jpg",  "img/scully_dos.jpg","img/scully_tres.jpg"];

var carta = $('.carta');
var primeraJugada = true;
//var segundaJugada = true;


function revelarCarta(){
    //primera carta
	if (primeraJugada == true){
		firstTile = $(this);
		primeraJugada= false;

	$(this).attr("src","img/carta_oculta.png");
	cartadescubierta= $(this).attr("src","img/carta_oculta.png");
	console.log(firstTile);

	}else{
		actualJugada = $(this)
	};
	primeraJugada = true;

/*segunda carta
	if (segundaJugada == true){
		segundaaCarta = $(this);
		segundaJugadaa= false;

	$(this).children().data("id");
	segundaCartaDescubierta= $(this).children().data("id");
	console.log(segundaCartaDescubierta);

    }else{
		otraJugada = $(this)
	};
	segundaJugada = true;
*/
}

 // fin revelar carta


function CrearPares(){
}

function MezclarCartas(){

}

//validar(jugador);
revelarCarta();
//$('#empezar').on('click', validar);
$('.carta').on('click', revelarCarta);


