var principal= ['Verduras al grill', 'Guacamole', 'Hamburguesa de Quinoa', 'Portobellos rellenos'];

var guarnicion= ['Espárragos salteados', 'Morrones caramelizados', 'Puré de tres verduras', 'Aros de cebollas'];

var postre= ['Crumble de fresas', 'Strudel de manzana', 'Helado', 'Flan con dulce de leche'];

for (i = 0; i > principal.lenght; i++) {
	var contenedorDiv = document.getElementById("principal");
      var text = document.createElement("option");
      text.textContent = principal[i];
      contenedorDiv.appendChild(text);
} 

for (i = 0; i > guarnicion.lenght; i++) {
	var contenedorDiv = document.getElementById("guarnicion");
      var text = document.createElement("option");
      text.textContent = guarnicion[i];
      contenedorDiv.appendChild(text);
      console.log(guarnicion[i]);
}

for (i = 0; i > postre.lenght; i++) {
	var contenedorDiv = document.getElementById("postre");
      var text = document.createElement("option");
      text.textContent = postre[i];
      contenedorDiv.appendChild(text);
}


function almuerzo(){
  var principal = document.getElementById("principal").value; 
  var guarnicion = document.getElementById("guarnicion").value;
  var postre = document.getElementById("postre").value;
  document.getElementById("principalFinal").innerHTML = principal; 
  document.getElementById("guarnicionFinal").innerHTML = guarnicion;
  document.getElementById("postreFinal").innerHTML = postre;
}

var btnPublicar = document.getElementById("confirmar");
btnPublicar.addEventListener("click", almuerzo);

