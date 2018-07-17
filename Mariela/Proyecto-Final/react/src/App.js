import React, { Component } from 'react';
import './App.css';
import Search from './components/searchBar.js';

class App extends Component {
  render() {
    return (
      <div className="Main">
      	<Search/>
      </div>
    );
  }
}

export default App;
