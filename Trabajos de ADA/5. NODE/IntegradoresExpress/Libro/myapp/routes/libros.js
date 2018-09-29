var express = require('express');
var router = express.Router();

var books = [{ titulo: "Harry Potter and The Philosopher's Stone",
			   isbn:'198432',
			   img: 'images/stone.jpeg'
			 },
			 { titulo: 'Harry Potter and The Chamber of Secrets',
			   isbn:'198433',
			   img: 'images/chamber.jpeg'
			 },
			 { titulo: 'Harry Potter and The Prisoner of Azkaban',
			   isbn:'198434',
			   img: 'images/azkaban.jpeg'
			 },
			 { titulo: 'Harry Potter and The Goblet of Fire',
			   isbn:'198435',
			   img: 'images/goblet.jpeg'
			 },
			 { titulo: 'Harry Potter and The Order of the Phoenix',
			   isbn:'198436',
			   img: 'images/phoenix.jpeg'
			 },
			{ titulo: 'Harry Potter and The Half-Blood Prince',
			   isbn:'198437',
			   img: 'images/prince.jpeg'
			 },
			 { titulo: 'Harry Potter and The Deathly Hallows',
			   isbn:'198438',
			   img: 'images/hallows.jpeg'
			 },
			 { titulo: 'Harry Potter and The Cursed Child',
			   isbn:'198439',
			   img: 'images/cursed.jpg'
			 }];

/* GET books. */
router.get('/', function(req, res, next) {

  res.render('libros', { title: 'Libreria de los sueños', libros: books});
});


module.exports = router;