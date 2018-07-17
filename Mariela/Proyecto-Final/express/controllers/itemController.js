let self = {}
var restler = require('restler');
const externalApi = require('../services/itemService')

const author = {
  name: 'Mariela',
  lastname: 'Gimenez',
}

////////////////////
/*
app.get('/', function (req, res, next) {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=:query")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    })//catch
});
*/