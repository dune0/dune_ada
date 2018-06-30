var express = require('express');
var router = express.Router();
var dogsController = require('../controllers/dogsController');

router.get('/', dogsController.showFavorites);
router.get('/:page', dogsController.showFavorites);

module.exports = router;