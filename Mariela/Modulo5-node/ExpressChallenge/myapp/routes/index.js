var express = require('express');
var router = express.Router();
//discos
var discos = 
      [{ nombre: 'Heaven Upside Down',
         artista:'Marilyn Manson',
         genero: 'Metal Industrial',
			   img: 'images/heavenupsidedown.png'
			 },
			 { nombre: 'Tranquility Base Hotel & Casino',
         artista:'Arctic Monkeys',
         genero: 'Indie Rock',
			   img: 'images/tbhc.jpg'
			 },
			 { nombre: 'Got Your Six',
         artista:'Five Finger Death Punch',
         genero: 'Heavy metal',
			   img: 'images/gotyoursix.jpg'
       },
       {nombre: 'Electra Heart',
        artista:'Marina and the Diamonds',
        genero: 'Electropop',
        img: 'images/electrahearts.png'
     },
      { nombre: 'Love Yourself',
        artista:'BTS',
        genero: 'kpop',
        img: 'images/loveyourself.jpg'
    },
      { nombre: 'In the Zone',
        artista: 'Britney Spears',
        genero: 'Pop',
        img:'images/inthezone.jpg'
      },
      { nombre: 'Glamazon',
        artista: 'RuPaul',
        genero:'Electropop',
        img:'images/glamazon.jpg'
      }];
//fin de discos
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('discos', { title: 'Discos Favoritos', disco: discos});
});

router.get('/:genero',function(req,res,next){

	let genero = req.params.genero;
	let disco = search(genero);

	if(disco){
		res.render('disco', { title: 'Discos Favoritos', disco: disco});
	
	}else{
		res.render('error');
	}
});


function search(isbn){

	let i;
	for(i=0;i<discos.length;i++){

		if(discos[i].genero == genero){

			return discos[i];
		}
	}
	return null;
}

module.exports = router;
