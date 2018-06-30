const dogsService = require('../services/dogsService');
const qs = require('qs');

const self = {};

//funciones auxiliares
//devuelve la página pedida de un array
getPage = function(array, currentPage) {
	const pageSize = 6;
	let pageCount = Math.ceil(array.length / pageSize);
	//comienzo del slice
	let start = (currentPage - 1) * pageSize;
	//fin del slice
	let end = start + pageSize;
	return {page: array.slice(start, end), pageCount: pageCount};
}

//para ver si req.query vino vacío
function isEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}

//parsea el query para mostrar los filtros aplicados en la vista
function descriptionFromQuery(queryObject) {
	return Object.values(queryObject).filter(item => item.length > 0).toString().replace(',', ', ');
}

self.showFavorites = function(req, res, next) {
	let array = dogsService.getDogs({fav: true});
	let currentPage = parseInt(req.params.page) || 1;
	let pageData = getPage(array, currentPage);
	let page = pageData.page;
	let pageCount = pageData.pageCount;
	let prevPageUrl = (`/fav/${currentPage - 1}`).toString();
	let nextPageUrl = (`/fav/${currentPage + 1}`).toString();
	//si la llamada vino de ajax devuelvo sólo el contenido a actualizar, si no, rendereo toda la página
	res.render(req.xhr ? 'alldogs' : 'dogs', {dogs: page, pageCount, currentPage, breeds: dogsService.getBreeds(), prevPageUrl, nextPageUrl, title: 'Your favs doggos and puppers'})
}

self.showAllorFiltered = function(req, res, next) {
	//filtro por lo que haya en el query: si vino vacío, muestro todos los perros
	let array = dogsService.getDogs(req.query);
	let currentPage = parseInt(req.params.page) || 1;
	//mando el array a getPage
	let pageData = getPage(array, currentPage);
	let page = pageData.page;
	let pageCount = pageData.pageCount;
	let responseData = {dogs: page, pageCount, currentPage, breeds: dogsService.getBreeds()};

	//armo las urls de los botones paginadores y el título de la página
	responseData.title = 'See all dogs';
	responseData.prevPageUrl = `/dogs/${currentPage - 1}`;
	responseData.nextPageUrl = `/dogs/${currentPage + 1}`;

	if (!isEmpty(req.query)) {
		responseData.title = 'Se aplicaron los filtros: ' + descriptionFromQuery(req.query);
		responseData.prevPageUrl = responseData.prevPageUrl.concat(`/?${qs.stringify(req.query)}`);
		responseData.nextPageUrl = responseData.nextPageUrl.concat(`/?${qs.stringify(req.query)}`);
	}
	//si la llamada vino de ajax devuelvo sólo el contenido a actualizar, si no, rendereo toda la página
	res.render(req.xhr ? 'alldogs' : 'dogs', responseData);
}

//renderea la vista individual
self.showById = function(req, res, next) {
	let dog = dogsService.getDog(req.params.id)
	if (dog) {
		res.render('dog', {dog: dog, breeds: dogsService.getBreeds()});
	}

	else {
		res.render('error', {message: 'ID inexistente'})
	}
}

//togglea el atributo 'fav' de un perro
self.toggleFavorite = function(req, res, next) {
	dogsService.toggleFavorite(req.params.id);
	res.send("favorite toggled");
}

module.exports = self;