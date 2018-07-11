import React, { Component } from 'react';
import './educacion.css';

class Educacion extends Component {

    render () {
        return (
        	<div className="educacion">
        	    <div id="titulo1">
                	<h1>Educación</h1>
        		</div>
        		<div id="desarrollo1">
        			<ul>
                    	<li>Primaria: ECFA</li>
                    	<li>Secundaria: CENS N° 457</li>
                    	<li>Terciario: ADA ITW</li>
                    	<li>Programa 111MIL: Java y Javascript</li>
        			</ul>
        		</div>
        	</div>
        )
    }
}

export default Educacion;