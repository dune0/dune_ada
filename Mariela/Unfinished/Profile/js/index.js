var entradas = []; //aca se cargan las entradas

var amigosDiv = document.getElementById('amigos');

var arrayNombres = ["Mariela Gimenez", "Argentina", "Cat Lover"];

/*Amigos*/

var ruben = ["Ruben", "amigo1.jpg"]; //nombre: posicion 0 y src: posicion 1
var flor = ["Florkaa", "amigo2.jpg"];
var china = ["China", "amigo3.jpg"];

var amigos =[ruben, flor, china,];

console.log("Nombre "+amigos[1][0]);

var i,j;

for(i=0;i<amigos.length;i++){
        
		//console.log(amigos[i]);
		for(j=0;j<amigos[i].length;j++){
			console.log(amigos[i][j]+",");
		}
}

/*Perfil*/
function cargarDatosPersonales(arrayNombres){

var nombre = document.createElement('h1');
nombre.textContent = arrayNombres[0];

var nacionalidad = document.createElement('h2');
nacionalidad.textContent = arrayNombres[1];

var resumen = document.createElement('p');
resumen.textContent = arrayNombres[2];

var dpDiv = document.getElementById('datosPerfil');

dpDiv.appendChild(nombre);
dpDiv.appendChild(nacionalidad);
dpDiv.appendChild(resumen);
}

/**
*Muestra en el html una lista de imagenes
*@params lista | array, padre | nodo html
*void 
**/

function cargarListaImagenes(lista,padre){

		var i;	
				for(i=0;i<lista.length;i++){
				var img = document.createElement('img');
				img.src = "Imagenes/"+lista[i][1];
				img.style.width = '80px';
                img.style.height = '80px';
				console.log(img.src);
				padre.appendChild(img);
		}		
}



/*Muro*/

/**
	* Carga elementos del muro
	* @params m | nodo padre
	* void
**/	

var muro = document.getElementById('muro');

function cargarMuro(m){

var ul = document.createElement('ul');
ul.setAttribute('id','posts'); 

  if(entradas.length>0){
    m.innerHTML = "";

    var ul = document.createElement('ul');

    for (var i=0; i<entradas.length; i++){

      var li = document.createElement('li');
      var img = document.createElement ('img');
      var img = document.createElement("img");
      img.src = 'imagenes/publicacion3.jpg';
      img.classList.add('thumb');
      li.appendChild(img);
      var texto = document.createElement("p"); //crear párrafo
      texto.textContent=entradas[i];
      li.appendChild(texto);
      ul.appendChild(li);
    }
    m.appendChild(ul);
  }
}

/**
* CArgar entradas del formulario
* @params no parametros
* void
**/

function publicar(){

	var entrada = document.getElementById('entrada');
	var texto = entrada.value;

	entradas.push(texto);
	console.log(texto);
	cargarMuro(muro);
}

cargarDatosPersonales(arrayNombres);
cargarListaImagenes(amigos,amigosDiv);
cargarMuro(muro);

var btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click',publicar);

//publicar();
//cargarformulario(form);
//document.querySelector('body').appendChild(nombre);var muro = document.createElement('muro');


