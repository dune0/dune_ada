import React, { Component } from 'react';
import '../css/list.css';
import Search from './searchBar.js';
//import '../js/fontawesome-all.js';
import { Link, Router, Route, Redirect } from "react-router-dom";

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  async getItems(props) {
    const params = props.match.params.id;
    const api =   await fetch("http://localhost:3001/api/items?q=" + params);
    const json = await api.json();
    console.log(json);

    this.setState({
      results: json.items
    });
  }

  async componentDidMount() {
    this.getItems(this.props);
  }

    render() {
        return (  
        <div>
          <Search />  
          <div className='searchBox'>  
         	  {this.state.results.map((result, i) => {
              return (
              	<Link className="link-product" key={i} >
              	 <span>{result.price.currency}</span>
              	</Link>
              );
            })}
          </div>
        </div>
        ); 
    }
}

export default List;