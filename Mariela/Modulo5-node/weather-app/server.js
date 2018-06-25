const express = require('express');
const bodyParser = require('body-parser'); // npm install body-parse
//parsea todos los datos del json de la api para poder ver la info de los parametros: weather,temp y name
const request = require('request');
const app = express()

//la apikey brindada por openweather va aparte para sea mas facil modificarla
const apiKey = 'afac5855caf18d89a319627784a53317';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
//Hay que decirle a node que view se va a usar.
app.set('view engine', 'ejs') // npm install ejs
//ejs nos permite trabajar con html y pueden tener partes dinamicas

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})
  
  //parametros del json de la api
  //weather Condiciones del clima: Temperatura, Nieve, Viento, Lluvia
  //main.temp Temperatura. Unidades: Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  //name nombre de la ciudad {city}

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  request(url, function (err, response, body) {
    if(err){ //si no reconoce el nombre de una ciudad da el mensaje de error
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){ //si no tiene datos del clima da el mensaje de error
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `Hacen ${weather.main.temp} °C en ${weather.name}`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
	//si se ejecuta ok este mensaje se vera en node
  console.log('Ir a localhost:3000')
})
