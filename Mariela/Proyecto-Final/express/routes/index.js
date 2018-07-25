var express = require('express');
var router = express.Router();
var itemController = require('../controllers/itemController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/items',function(req, res, next) {
     itemController.search(req,res);
});

module.exports = router;
