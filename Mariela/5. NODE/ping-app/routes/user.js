var express = require('express');
var router = express.Router();

var fs = require('fs'); //variable global

var usuarios = [
 {name: 'Mariela', lastName: 'Gimenez', tel: 1551178878, email: 'dune.megv@gmail.com'},
 {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
 {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
 {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
 {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
 {name: 'lala', lastName: 'lopez', tel: 123456, email: 'lalalopez@mail.com'},
 ];


router.get('/form', function(req,res,next){
    //renderiza el form y el boton    
    res.render('form', { title: 'Form'})
});


module.exports = router;