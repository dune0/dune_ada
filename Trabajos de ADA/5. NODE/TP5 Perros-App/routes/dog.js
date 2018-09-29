var express = require('express');
var router = express.Router();
var dogsController = require('../controllers/dogsController');

router.get('/', function(req, res) {
	res.redirect('../');
})

router.get('/:id', dogsController.showById);

router.patch('/:id/fav', dogsController.toggleFavorite);
router.get('/:id/fav', function(req, res) {
	res.redirect('../');
})

module.exports = router;