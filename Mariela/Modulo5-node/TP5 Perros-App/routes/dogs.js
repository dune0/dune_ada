var express = require('express');
var router = express.Router();
var dogsController = require('../controllers/dogsController');
var bodyParser = require('body-parser');

//muestra todos los perros o aplica un filtro si lo hay
router.get('/', dogsController.showAllorFiltered);
router.get('/:page', dogsController.showAllorFiltered);

module.exports = router;