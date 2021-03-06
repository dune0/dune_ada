var express = require('express');
var router = express.Router();
// localhost:3000/paises (se ve como json)

var paises = {
"paises":[
    {"nombre":"Argentina", "codigo":"AR"},
    {"nombre":"Bolivia", "codigo":"BO"}, 
    {"nombre":"Brasil", "codigo":"BR"},
    {"nombre":"Chile", "codigo":"CL"},
    {"nombre":"Paraguay", "codigo":"PY"},
    {"nombre":"Uruguay", "codigo":"UY"},
]
}

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(paises));
});

module.exports = router;