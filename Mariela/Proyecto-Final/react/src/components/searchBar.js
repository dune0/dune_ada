import React, { Component } from 'react';
import '../css/searchBar.css';
import '../js/fontawesome-all.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Search extends Component {
    constructor(props){
        super(props);
        this.state={inputvalue : ""};
    }

    handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputvalue: value
    });
    console.log(value)
  }
    render() {
        const redirect = "/list/" + this.state.inputvalue;
        return (    
          <div className='SearchBox'>  
             <input
              onChange={this.handleChange.bind(this)}
              className="search-input"
              type="text"
              placeholder="Busca siempre"
              value={this.state.inputValue}
             />
            <Link to={redirect}>
              <button className="search-button">
                <i className="fas fa-search" />
              </button>
            </Link>
          </div>
        ); 
    }
}

export default Search;