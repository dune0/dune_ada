var cartasArray = [{
    'name': 'mulder1',
    'img': 'img/believe1.jpg'
  }, {
    'name': 'mulder2',
    'img': 'img/believe2.jpg'
  }, {
    'name': 'mulder3',
    'img': 'img/believe3.jpg'
  }, {
    'name': 'scully1',
    'img': 'img/believe4.jpg'
  }, {
    'name': 'scully2',
    'img': 'img/believe5.jpg'
  }, {
    'name': 'scully3',
    'img': 'img/believe6.jpg'
  }];
  
  //variables globales
  var primerClick = '';
  var segundoClick = '';
  var jugadas= 0;//fichas seleccionadas
  var cont = 0; //intentos
  var previousTarget = null;
  var delay = 800;

  var setlevel = '';
  var level= '';
  var localstorage;
  var partidas;
  
  //se crea la tabla de imagenes dinamicamente
  var juego = document.getElementById('juego');
  var tabla = document.createElement('section');
  tabla.setAttribute('class', 'tabla');
  juego.appendChild(tabla);

//cartel de bienvenida al empezar cada partida
function cartelito() {
  var alerta;
  var jugador = prompt("Escribí tu nombre para comenzar a jugar:");
    if(jugador == null || jugador == "") {
        alerta = "Alien anon";
    }else{
        alerta = "Let´s go " + jugador + "!";
      }
  document.getElementById("nombrejugador").innerHTML = alerta;
}
cartelito();
//json
/*
function level(){
        switch (level) {
          case 'Facil':
          var maxJugadas = 17
          break;
            
          case 'Intermedio':
          var maxJugadas = 11
          break;
          
          case 'Experto':
          var maxJugadas = 7
          break;
        
          default:
          var maxJugadas = 0
          break;
        }
}
level();
*/

function savePartida(){
    if(localStorage.getItem('partidas')!=null){
        partidas=JSON.parse(localStorage.getItem("partidas")).partidas;
    } 
    else{
        partidas=[];
    }

    var name = document.getElementById('nombrejugador').innerHTML;
    let partida={nombre: name, nivel: level, clicksused: jugadas};

    partidas.push(partida);   
   
    
   jsonPartidas={
        'partidas':partidas,
        'total':partidas.length
   }

   let data=JSON.stringify(jsonPartidas);
   localStorage.setItem('partidas',data);
    //localStorage.clear();
    console.log(localStorage.getItem('partidas'))
}
savePartida();
//json

function Memotest(){
    var tablaJuego = cartasArray.concat(cartasArray).sort(function () {
      return 0.5 - Math.random();
    });
    
    tablaJuego.forEach(function (item) {
      var name = item.name,
          img = item.img;
    
    
      var carta = document.createElement('div');
      carta.classList.add('carta');
      carta.dataset.name = name;
    
      var front = document.createElement('div');
      front.classList.add('front');
    
      var back = document.createElement('div');
      back.classList.add('back');
      back.style.backgroundImage = 'url(' + img + ')';
    
      tabla.appendChild(carta);
      carta.appendChild(front);
      carta.appendChild(back);
    });
      
//cuando hay un match entre dos cartas se ven las estrellas
var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (carta) {
      carta.classList.add('match');
    });
  };
  
  var resetGuesses = function resetGuesses() {
    primerClick = '';
    segundoClick = '';
    cont = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (carta) {
      carta.classList.remove('selected');
    });
  };
  
  tabla.addEventListener('click', function (event) {
  
    var clicked = event.target;
    
        if (clicked.nodeName === 'SECTION' || clicked.parentNode.classList.contains('marcada') || clicked.parentNode.classList.contains('match')) {
        return;
        }
        if (cont < 2) {
            cont++;
            if (cont === 1) {
              primerClick = clicked.parentNode.dataset.name;
              console.log(primerClick);
              clicked.parentNode.classList.add('selected');
            } else {
              segundoClick = clicked.parentNode.dataset.name;
              console.log(segundoClick);
              clicked.parentNode.classList.add('selected');
            }
    
            if (primerClick && segundoClick) {
                if (primerClick === segundoClick) {
                  setTimeout(match, delay);
                }
                setTimeout(resetGuesses, delay);
              }
            if (cont==2){
                jugadas++
                console.log("All moves" + jugadas);
                var allMoves = document.getElementById('jugadas');
                allMoves.innerHTML = 'Movimientos: ' + (jugadas);
            }
        }

        switch (level) {
          case 'Facil':
          var maxJugadas = 17
          break;
            
          case 'Intermedio':
          var maxJugadas = 11
          break;
          
          case 'Experto':
          var maxJugadas = 7
          break;
        
          default:
          var maxJugadas = 0
          break;
        } // switch

        if (jugadas < maxJugadas) {
            //Si se hacen todo los match, sale mensaje de ganaste
            if (primerClick===segundoClick){
                var coincidencias = document.getElementsByClassName('match');
                console.log ('coincidencias:' + coincidencias);
                console.log('lengh:' + coincidencias.length)
                if (coincidencias.length == 10) {
                    setTimeout (function(){
                        alert("Aliens are proud of you"); }, 2000);
                        savePartida()
                        setTimeout (function() {window. location.reload(); }, 2000);
                    //setTimeout (function() {location.reload(); }, 4000); //resetea el juego para jugar de nuevo
            } 
        }
      } //if jugadas < maxJugadas

        if (jugadas > maxJugadas){
            var coincidencias = document.getElementsByClassName('match');
                if (coincidencias.length == 10){
                setTimeout (function(){ 
                alert("Aliens are proud of you"); }, 800)
                setTimeout (function() {window. location.reload(); }, 1500);
                 //resetea el juego pra jugar de nuevo
                } else {
                setTimeout (function(){
                    alert("I want to believe you are not a loser, try again"); }, 800);}
                    savePartida()
                    setTimeout (function() {window. location.reload(); }, 1500);
            } //jugadas > maxJugadas
    });
        
}

    $("#btn").on("click", function rnk () {
        level = $('input:radio[name=nivel]:checked').val()

        switch (level) {
            case 'Facil':
            $('#btn').attr("disabled", true); // deshabilita el boton al iniciar el juego
            $('#btn').addClass('hide'); // desaparece el boton al comenzar el juego
            var maxJugadas = 18;
            Memotest ()
            break;

            case 'Intermedio':
            $('#btn').attr("disabled", true);
            $('#btn').addClass('hide');
            var maxJugadas = 12;
            Memotest ()
            break;
            
            case 'Experto':
            $('#btn').attr("disabled", true);
            $('#btn').addClass('hide');
            var maxJugadas = 8;
            Memotest ()
            break;
        
            default:
            alert('Seleccionar dificultad')
            break;
        }
    });  