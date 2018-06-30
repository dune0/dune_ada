var express = require('express');
var router = express.Router();
var dogsController = require('../controllers/dogsController');

//el home muestra favoritos
router.get('/', dogsController.showFavorites);
module.exports = router;
