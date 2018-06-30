$(document).ready(function() {
	//breadcrumb
	if (!(window.location.href).toString().includes('dog/')) {
		let path = $("#title h1").text()
		$(".breadcrumb").append(` > ${path}`);
	}

	//botón agregar a/quitar de favoritos
	$(document).on("click", ".favorito", function(event) {
		event.preventDefault();
		let perroId = $(this).closest(".item").data("id");
		let heartIcon = $(this);
		//modifica el perro
		$.ajax({
			url: `/dog/${perroId}/fav`,
			method: "PATCH",
			data: {'id': perroId},
			success: function() {
				console.log("hecho!")
				if (heartIcon.hasClass("fas")) {
					heartIcon.removeClass("fas").addClass("far");
					$(".favText").text("Agregar a favoritos");
				}

				else {
					heartIcon.removeClass("far").addClass("fas");
					$(".favText").text("Quitar de favoritos");
				}
			}			
		})
	})

	//botones de paginación
	$(document).on("click", ".pageArrow", function() {
		let url = $(this).data("url");
		$.ajax({
			url: url
		}).done(function(data) {
			$("#containerHome").html(data);
			window.location.href = url;
		})
	})


	function checkFilters(formData) {
		for (filter of formData) {
			if (filter.value.length > 0) {
				return true;
			}
		}
	}

	//formulario de filtros
	$("#filter").on("submit", function(event) {
		event.preventDefault();
		$(".filterError").remove();
		if (checkFilters($(this).serializeArray())) {
			console.log('hay filtros, mando')
			let filters = $(this).serialize();
			$.ajax({
				url: '/dogs/?' + filters
			}).done(function(data) {
				$("#containerHome").empty();
				$("#containerHome").append(data);
				window.location.href = '/dogs/?' + filters;
			}).fail(function(err){
				console.log(err)
			})
		}

		else {
			$("form").append(`<p class="filterError" style="color: black">Por favor especifique un filtro</p>`)
		}	
	})
})