const service = {};

const dogs = [
             { breed: 'American Eskimo',
			   size:'Little',
			   age: 'Pupper',
			   image: 'AmericanEskimoPuppy.jpg',
			   id: '001',
			   fav: true
			 },
			 { breed: 'American Eskimo',
			   size:'Little',
			   age: 'Doggo',
			   image: 'AmericanEskimo.jpg',
			   id: '002',
			   fav: true
			 },
			 { breed: 'Australian Terrier',
			   size:'Little',
			   age: 'Pupper',
			   image: 'AustralianTerrierPuppy.jpg',
			   id: '003',
			   fav: false
			 },
			 { breed: 'Australian Terrier',
			   size:'Little',
			   age: 'Doggo',
			   image: 'AustralianTerrier.jpg',
			   id: '004',
			   fav: false
			 },
			 { breed: 'Bichón Frisé',
			   size:'Little',
			   age: 'Pupper',
			   image: 'BichonFrisePuppy.jpg',
			   id: '005',
			   fav: true
			 },
			 { breed: 'Bichón Frisé',
			   size:'Little',
			   age: 'Doggo',
               image: 'BichonFrise.jpg',
               id: '006',
			   fav: true
			 },
			 { breed: 'Cocker Spaniel Ingles',
			   size:'Medium',
			   age: 'Pupper',
			   image: 'CockerSpanielInglesPuppy.jpg',
			   id: '007',
			   fav: false
			 },
			 { breed: 'Cocker Spaniel Ingles',
			   size:'Medium',
			   age: 'Doggo',
			   image: 'CockerSpanielIngles.jpg',
			   id: '008',
			   fav: false
			 },
			 { breed: 'Shiba Inu',
			   size:'Medium',
			   age: 'Pupper',
			   image: 'ShibaInuPuppy.jpg',
			   id: '009',
			   fav: true
			 },
			 { breed: 'Shiba Inu',
			   size:'Medium',
			   age: 'Doggo',
			   image: 'ShibaInu.jpg',
			   id: '010',
			   fav: true
			 },
			 { breed: 'Bull Terrier',
			   size:'Medium',
			   age: 'Pupper',
			   image: 'BullTerrierPuppy.jpg',
			   id: '011',
			   fav: false
			},
			{ breed: 'Bull Terrier',
			   size:'Medium',
			   age: 'Doggo',
			   image: 'BullTerrier.jpg',
			   id: '012',
			   fav: false
			},
			 { breed: 'Boxer',
			   size:'Large',
			   age: 'Pupper',
			   image: 'BoxerPuppy.jpg',
			   id: '013',
			   fav: true
			 },
			 { breed: 'Boxer',
			   size:'Large',
			   age: 'Doggo',
			   image: 'Boxer.jpg',
			   id: '014',
			   fav: true
			 },
			 { breed: ' Dálmata',
			   size:'Large',
			   age: 'Pupper',
			   image: 'DalmataPuppy.jpg',
			   id: '015',
			   fav: false
			 },
			 { breed: ' Dálmata',
			   size:'Large',
			   age: 'Doggo',
			   image: 'Dalmata.jpg',
			   id: '016',
			   fav: false
			 },
			 { breed: 'Doberman',
			   size:'Large',
			   age: 'Pupper',
			   image: 'DobermanPuppy.jpg',
			   id: '017',
			   fav: true
			 },
			 { breed: 'Doberman',
			   size:'Large',
			   age: 'Doggo',
			   image: 'Doberman.jpg',
			   id: '018',
			   fav: true
			 },
			 { breed: 'Fila Brasileiro',
			   size:'Giant',
			   age: 'Pupper',
			   image: 'FilaBrasileiroPuppy.jpg',
			   id: '019',
			   fav: false
			 },
			 { breed: 'Fila Brasileiro',
			   size:'Giant',
			   age: 'Doggo',
			   image: 'FilaBrasileiro.jpg',
			   id: '020',
			   fav: false
			 },
			 { breed: 'Mastiff Tibetano',
			   size:'Giant',
			   age: 'Pupper',
			   image: 'MastiffTibetanoPuppy.jpg',
			   id: '021',
			   fav: true
			 },
			 { breed: 'Mastiff Tibetano',
			   size:'Giant',
			   age: 'Doggo',
			   image: 'MastiffTibetano.jpg',
			   id: '022',
			   fav: true
			 },
			 { breed: 'Terranova',
			   size:'Giant',
			   age: 'Pupper',
			   image: 'TerranovaPuppy.jpg',
			   id: '023',
			   fav: false
			 },
			 { breed: 'Terranova',
			   size:'Giant',
			   age: 'Doggo',
			   image: 'Terranova.jpg',
			   id: '024',
			   fav: false
			 }];

service.getDog = function(id) {
	let dog = dogs.find(dog => dog.id === id);
	return dog;
}

service.getDogs = function(filters) {
	//paso el array por un filtro que puede o no estar seteado
	let dogsFilter = dogs.filter(function(dog) {
		for (var filter in filters) {
			//si el filtro vino vacío
	  	if (!filters[filter]) { //guarda con esto porque un filtro con valor 0 pasa
	  		//paso al siguiente filtro (el perro lo pasa trivialmente)
	    	continue;
	  	}
	  	//si el perro actual no cumple con el filtro
	  	if (dog[filter] !== filters[filter]) {
	  		//queda fuera del filter
	    	return false;
	  	}
  	}
  	//si no quedó fuera, queda dentro del filter
  	return true;
	});
	return dogsFilter;
}

//get all breeds
service.getBreeds = function() {
	return dogs.map(dog => dog.breed)
}

service.toggleFavorite = function(id) {
	let dog = service.getDog(id);

	if (dog.fav === true) {
		dog.fav = false;
	}

	else {
		dog.fav = true;
	}

	console.log("se realizó un cambio ", dog)
}

module.exports = service;