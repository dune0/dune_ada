const axios = require ('axios')
var superObjeto = {}
axios
  .get('https://api.github.com/users/ezeggonzalez/repos')
  .then(function (res){
  	console.log('respuesta de la api de github')
  	superObjeto.respuesta1= res.data;
  	return axios.get('https://api.github.com/users/ezeggonzalez/repos')
  })
  .then(function(res){
  	console.log('respuesta del return de axios.get')
  	superObjeto.respuesta2 = res.data;
  })
  .then(function(){
  	console.log('un then posterior posterior')
  	console.log(superObjeto)
  })
  .catch(function(err){
  	console.log('catch')
  })