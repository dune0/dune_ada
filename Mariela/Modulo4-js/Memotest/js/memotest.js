function cartel() {
    var alerta;
    var jugador = prompt("Quien juega?");
    if (jugador == null || jugador == "") {
        alerta = "?????";
    } else {
        alerta = "¡A disfrutar del juego xicaaa! O no...";
    }
    document.getElementById("nombrejugador").innerHTML = alerta;
}

cartel()
/////////////////////////////////////////////////////////////////////

$('.carta').on('click', function(){

var tiles = ["img/mulder_uno.jpg", "img/mulder_dos.jpg", "img/mulder_tres.jpg", "img/mulder_uno.jpg", "img/mulder_dos.jpg", "img/mulder_tres.jpg", 
"img/scully_uno.jpg",  "img/scully_dos.jpg", "img/scully_tres.jpg", "img/scully_uno.jpg",  "img/scully_dos.jpg","img/scully_tres.jpg"];

});

/////////////////////////////////////////////////////////////////////
function mix(){

    for(i=0; i<tiles.length; i++){
      var random= Math.floor(Math.random()*tiles.length);
      var slot=tiles[i]; 
      tiles[i]=tiles[random];
      tiles[random]=slot; 
    }
}
mix();
/////////////////////////////////////////////////////////////////////
var carta = $('.carta');
var primeraJugada = true;
//var segundaJugada = true;


function revelarCarta(){
    //primera carta
	if (primeraJugada == true){
		firstTile = $(this);
		primeraJugada= false;

	$(this).attr("src");
	cartadescubierta= $(this).attr("src");
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
