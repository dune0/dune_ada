import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './components/Search.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><Search/></div>
        </header>
      </div>
    );
  }
}

export default App;
