import React, { Component } from 'react';
import './foto.css';

class Foto extends Component {

    render () {
        return (
        <div className="cuadro-foto">
			<div id="foto">
				<img src={require('../src/images/raven.jpg')} alt="self" />
			</div>
			<div id="datos">
				<div id="uno">
					<h3>Mariela Elizabeth Gimenez Villalba</h3>
				    <p>Junior Frontend Developer</p>
				</div>
				<div id="dos">
				    <p>Age: 28</p>
		      		<p>Address: Coronel Montt 6785</p>
		      		<span>Email: </span><a href="mailto:dune.megv@gmail.com" target="_blank" >dune.megv@gmail.com</a>
		      		<p>Phone: +5491151178878</p>
		      		<span>Website: </span><a href="www.http://dune0.com.ar/" target="_blank">dune0.com.ar</a>
				</div>
				<div id="tres">
				    <ul id="lista2">
						<li><a href="https://facebook.com/dune.megv" target="_blank"><img src={require('../src/images/facebook.png')} alt="logo-facebook" /></a></li>
						<li><a href="https://twitter.com/dunetchka_" target="_blank"><img src={require('../src/images/twitter.png')} alt="logo-twitter" /></a></li>
						<li><a href="https://www.linkedin.com/in/dune-megv/" target="_blank"><img src={require('../src/images/linkedin.png')} alt="in-logo" /></a></li>
						<li><a href="https://github.com/dune0" target="_blank"><img src={require('../src/images/github.png')} alt="octocat" /></a></li>
	      		  </ul>
				</div>
			</div> 
		</div>
        )
    }
}

export default Foto;