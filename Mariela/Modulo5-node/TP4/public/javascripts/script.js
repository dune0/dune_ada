$.ajax({
  url: "/paises",
  dataType: "json",
}).done(function(data) {
  data.paises.forEach(function(element) {
        let option = `<option value="${element.nombre}">${element.nombre}</option>`
        $("#paises").append(option);
    })
})

$.ajax({
  url: "/preguntas",
  dataType: "json",
}).done(function(data) {
  data.preguntas.forEach(function(element) {
    let pregunta = $(`<div id="${element.name}"><h3>${element.pregunta}</h3></div>`);
    element.opciones.forEach(function(elem) {
      var respuestas = $(`<label class="radiolabel" for="${elem}">
        <input type='radio' class="radioBtn" name='${element.name}' value='${elem}' id='${elem}'>${elem}</label>`);
      pregunta.append(respuestas);
    })    
    $('form').append(pregunta);
  })
  $('form').append($(`<div class="btn"><input id="enviar" type='button' value='Enviar'></div>`));
  $('form').append($("<div class='error' style='display:none'></div>"));
})

function cargarResultados(respuesta) {
    let fila = `<tr data-id="${respuesta.id}"><td>${respuesta.pais}</td>
                                              <td>${respuesta.lenguajes}</td>
                                              <td>${respuesta.nivel}</td>
                                              <td>${respuesta.sistema}</td>
                                              <td>${respuesta.editor}</td>
                </tr>`;
    $('#table').append(fila);
}

let respuestas = (JSON.parse(localStorage.getItem("respuestas")) || []);
if (respuestas.length > 0) {
  respuestas.forEach(cargarResultados);
}

$(document).on('click', "#enviar" ,function(){
  let pais = $('#paises option:selected').val();
  let lenguajes = ($('input:radio[name=lenguajes]:checked').val());
  let nivel = ($('input:radio[name=nivel]:checked').val());
  let sistema = ($('input:radio[name=sistema]:checked').val());
  let editor = ($('input:radio[name=editor]:checked').val());

  if (pais && lenguajes && nivel && sistema && editor) {
    let respuesta = {
      pais: pais,
      lenguajes: lenguajes,
      nivel: nivel,
      sistema: sistema,
      editor: editor
    }
    respuestas.push(respuesta);
    let id = respuestas.indexOf(respuesta);

    respuesta.id = id;
    console.log(respuesta, id)

    localStorage.setItem("respuestas", JSON.stringify(respuestas));
    cargarResultados(respuesta);
    $("form")[0].reset();
    $(".error").css("display", "none");
  }

  else {
    $(".error").text("Todos los campos son requeridos").css("display", "block")
  }
})

$(document).on('click', function(){
  let id = $(this).closest("tr").data("id");
  respuestas.splice(id, 1);
  localStorage.setItem("respuestas", JSON.stringify(respuestas));
  $(this).closest("tr").remove();
});

localStorage.clear();