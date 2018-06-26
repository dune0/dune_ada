var express = require('express');
var router = express.Router();
// localhost:3000/paises (se ve como json)

var perritos = [
             { raza: 'American Eskimo',
			   tamaño:'Pequeño',
			   img: 'images/AmericanEskimo.jpg',
			   detalle: 'Se trata de un descendiente de los Spitz procedentes del norte del continente Europeo. Es un perro muy activo al que le encanta la nieve y el frío.'
			 },
			 { raza: 'Australian Terrier',
			   tamaño:'Pequeño',
			   img: 'images/AustralianTerrier.jpg',
			   detalle: 'Es un perro alargado, robusto de extremidades cortas y fuertes, de pelaje áspero. Sus medidas están en 25 cm. hasta la cruz para los machos y en 22,5 - 23 en las hembras, el peso medio es de 6,5 kg. en los machos, y 6 kg. en las hembras.'
			 },
			 { raza: 'Bichón Frisé',
			   tamaño:'Pequeño',
			   img: 'images/BichonFrise.jpg',
			   detalle:'El Bichón Frisé es un perro de origen europeo, descendiente del bichón maltés. Es un buen perro de compañía, y con la apropiada socialización, será amistoso y se adaptará bien al ambiente casero, su temperamento es estable.'
			 },
			 { raza: ' ',
			   tamaño:'Mediano',
			   img: 'images/AmericanEskimo.jpg',
			   detalle: ''
			 },
			 { raza: '',
			   tamaño:'Mediano',
			   img: 'images/harry_potter2.jpg',
			   detalle:
			 },
			 { raza: '',
			   tamaño:'Mediano',
			   img: 'images/harry_potter.png',
			   detalle:
			 },
			 { raza: ' ',
			   tamaño:'Grande',
			   img: 'images/AmericanEskimo.jpg',
			   detalle: ''
			 },
			 { raza: '',
			   tamaño:'Grande',
			   img: 'images/harry_potter2.jpg',
			   detalle:
			 },
			 { raza: '',
			   tamaño:'Grande',
			   img: 'images/harry_potter.png',
			   detalle:
			 },
			 { raza: ' ',
			   tamaño:'Gigante',
			   img: 'images/AmericanEskimo.jpg',
			   detalle: ''
			 },
			 { raza: '',
			   tamaño:'Gigante',
			   img: 'images/harry_potter2.jpg',
			   detalle:
			 },
			 { raza: '',
			   tamaño:'Gigante',
			   img: 'images/harry_potter.png',
			   detalle:
			 }];

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(paises));
});

module.exports = router;