import React, { Component } from 'react';
import './style.css';
import Header from './header.js'; //por cada componente creado, debo importarlo aqui en el app.js
import Foto from './foto.js';
import Skill from './skill.js';
import Educacion from './educacion.js'
import Repos from './repos.js';
import Footer from './footer.js';

class App extends Component {
 render() {
   return (
     <div>
       <Header/>
       <Foto/>
       <Skill/>
       <Educacion/>
       <Repos/>
       <Footer/>
     </div>
   );
 }
}

export default App;
