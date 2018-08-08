var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ping');//nombre del archivo pug
});

module.exports = router;
