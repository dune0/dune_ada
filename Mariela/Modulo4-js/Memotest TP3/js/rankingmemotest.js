var partidasRanking=JSON.parse(localStorage.getItem('partidas')).partidas;

function Ranking(a, b){
	var ajugadas = a.clicksused;
	var bjugadas = b.clicksused;
  	return ((ajugadas < bjugadas) ? -1 : ((ajugadas > bjugadas) ? 1 : 0));
}

partidasRanking.sort(Ranking);

//Se genera una fila de tres celdas por cada jugada guardada a mostrar en la tabla
$.each(partidasRanking, function( i, e ){
    $('#list').append(`<tr><td>${e.nombre}</td><td>${e.nivel}</td><td>${e.clicksused}</td></tr>}`);
});