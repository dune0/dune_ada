import React, { Component } from 'react';
import './../App.css';
import lupa from './../lupa.png'
import logo from './../logo.png'
import '../components/Search.css';

class Search extends Component {
    
    render() {
        return (    
          <div className='SearchBox'>  
            <figure id="logo" >
                <img src={logo}/>
            </figure>
            <form id="form" action="/items" method="get">
                <input id="search" type="text" name="search" placeholder="Buscar"></input>
                <button id="lupa" type="submit">
                    <img src={lupa} alt="lupa"/>
                </button>
            </form>
          </div>
        ); 
    }
}

export default Search;