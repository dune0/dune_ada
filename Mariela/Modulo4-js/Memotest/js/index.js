
var carta = document.getElementsByClassName('carta');

var cartasArray = [
{ name: 'mulderuno',         img: 'mulder_uno.jpg' },
{ name: 'mulderdos',         img: 'mulder_dos.jpg' },
{ name: 'muldertres',        img: 'mulder_tres.jpg' },
{ name: 'scullyuno',         img: 'scully_uno.jpg' },
{ name: 'scullydos',         img: 'scully_dos.jpg' },
{ name: 'scullytres',        img: 'scully_tres.jpg' },
]// termina el Array

$(".carta").on("click", function(event){ //al clickear una ficha
	let position = $(this).data("position");//trae el data-position de donde se clickeó
	let carta = cartas.find(function(tile) { //encuentra el objeto ficha correspondiente
		return tile.position == position;
	})
	if (carta.status !== "disabled") { //si la ficha no está desactivada (porque ya encontré el par)
		carta.flipTile();//la da vuelta
	}
});
