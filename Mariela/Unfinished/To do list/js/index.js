var listaArray = [];

function publicar() {
  var addtask = document.getElementById("addtask");
  var texto = addtask.value; 
  listaArray.push(texto); 
  cargarMuro(listaArray);
  document.getElementById("addtask").value = ""; 
}
