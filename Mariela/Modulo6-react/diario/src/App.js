import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Nav">
          <a href="https://lanacion.com">La Nación</a> | <b><a href="https://lanacion.com">Tecnologia</a></b> | <a href="https://lanacion.com">Tecnologia</a>
        </div>
        <div className="Titulo">
          <h1 className="App-title">Japón planea tener el rascacielos de madera más alto del mundo en Tokio</h1>
        </div>
        <figure>
          <img src={require('../src/edificio1.png')} alt="edificio1" />
          <figcaption id="pie1"> Tendrá 350 metros de altura y será la más alta en su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero </figcaption>
        </figure>
        <p className="fecha"> 16 de febrero de 2018 <b>• 00:16 </b> </p>
        <p id="capital"> El constructor y desarrollador inmobiliario <a href="">Sumitomo Forestry</a>, especializado en la industria forestal, planea tener para las próximas décadas el ambicioso objetivo de desarrollar un torre rascacielos de 350 metros de altura. Como referencia, el edificio más alto de Buenos Aires será el Alvear Tower, una construcción tradicional de 235 metros, mientras que el edificio más alto de madera es el Brock Commons Tallwood House, un edificio de 53 metros de altura ubicado en la Universidad de Columbia Británica en Vancouver, Canadá.</p>
        <p>El proyecto, diseñado por Nikken Sekkei, buscará combinar una proporción de 9 a 1 de madera y acero para la particular estructura solicitada por Sumitomo para celebrar el 350 aniversario de la compañía en 2041 con una estructura que transforme a Tokio en un bosque.</p>
        <figure>
         <img src={require('../src/edificio2.png')} alt="edificio2" />
         <figcaption id="pie2"> La madera permitirá contar con un excelente recurso antisísmico dada su flexibilidad y resistencia </figcaption>
        </figure>
        
      </div>
    );
  }
}

export default App;
