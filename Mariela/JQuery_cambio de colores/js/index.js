/*
 $(".negro").mouseover(function () {
	 $(this).css('background-color', '#ff7373'); // pink color
	 }).mouseout(function () {
	 $(this).css('background-color', '#000001'); // black color
	 });
*/

console.log("cargado");

function cambiar(){
//div negro
  $("#unico").click(function() {
	 $(this).css('background-color', '#ff7373'); //rosa
});
  $("#unico").dblclick(function() {
	 $(this).css('background-color', '#000001'); //negro ya asignado en css
});
// fin del div negro
// div verde click izquierda
$("#twin1").click(function(){
	$("#twin2").css('background-color', '#3eff00'); //verde-lima
});
$("#twin1").dblclick(function() {
	$("#twin2").css('background-color', '#015818'); //verde ya asignado en css
});
// fin del div verde click izquierda
// div verde click derecha
$("#twin2").click(function(){
	$("#twin1").css('background-color', '#3eff00'); //verde-lima
});
$("#twin2").dblclick(function() {
	$("#twin1").css('background-color', '#015818'); //verde ya asignado en css
});
// fin del div verde click derecha
//div rojo
  $("#rojo2").click(function() {
	 $("#rojo1,#rojo3").css('background-color', '#ff8b00'); //naranja
});
  $("#rojo2").dblclick(function() {
	 $("#rojo1,#rojo3").css('background-color', '#ab0c0c'); //rojo ya asignado en css
});
// fin del div rojo

} //fin de la funcion
cambiar()


/*
 //divs verdes
  $("#twin1").click(function() {
	 $("#twin2").css('background-color', '#61ff0d');
   });
  $("#twin1").dblclick(function() {
	 $("#twin2").css('background-color', '#a0db8e'); //verde
}

// divs rojos
$("#rojo2").click(function(){
	$("#rojo1").css('background-color', '##ea125e');
});
  $("#rojo2").dblclick(function() {
	 $("#rojo1").css('background-color', '#ab0c0c'); //rojo
   });

*/