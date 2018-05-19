/*function cartel() {
    var alerta;
    var jugador = prompt("Quien juega?");
    if (jugador == null || jugador == "") {
        alerta = "Paraaalaa laaakaa";
    } else {
        alerta = "¡A disfrutar del juego xicaaa! O no...";
    }
 }
cartel()
*/

var azar;
/*CONSIGO UNA IMAGEN RANDOM*/
var array = ["img/mulder_uno.jpg", "img/mulder_dos.jpg", "img/mulder_tres.jpg", 
              "img/mulder_uno.jpg", "img/mulder_dos.jpg", "img/mulder_tres.jpg", 
              "img/scully_uno.jpg",  "img/scully_dos.jpg", "img/scully_tres.jpg", 
              "img/scully_uno.jpg",  "img/scully_dos.jpg","img/scully_tres.jpg"];

function shuffle() {
		var i=array.length;
		while(i--){
			var j=Math.floor( Math.random() * (i+1) );
			var tmp=array[i];
			array[i]=array[j];
			array[j]=tmp;
			azar = tmp;
		}	console.log(azar);
} // aca finaliza la funcion shuffle

shuffle();

/*ME MUESTRA EL DATA ID DE LA IMAGEN DE LA CARTA OCULTA*/

var carta = $('.carta');
var primeraJugada = true;
var srccarta = ($(this).attr('src') === "img/carta_oculta.png")

function revelarCarta1(){

		if (primeraJugada == true){
			primeraCarta = $(this);
			primeraJugada= false;

		$(this).data("id");
		cartaescondida= $(this).data("id");
		console.log(cartaescondida);

		}else{
			actualJugada = $(this)
		};
		primeraJugada = true;
		
		$(this).attr('src');
		srccarta= $(this).attr('src', azar);
		console.log(srccarta);

}// aca finalizala function revelarCarta

revelarCarta();

$('.carta').on('click', revelarCarta1);