import React, { Component } from 'react';
import './App.css';
import Search from './components/searchBar.js';
import List from './components/list.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/list/:id" component={List} />
        </div>
      </Router>

    );
  }
}

export default App;

