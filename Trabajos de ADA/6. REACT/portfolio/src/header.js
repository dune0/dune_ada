import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render () {
        return (
        <div className="header">
            <div id="name">
                <h1>Mariela Gimenez</h1>
                <h3>Junior Frontend Developer</h3>
            </div>
            <div id="redes">
                <ul id="lista">
                    <li><a href="https://www.facebook.com/dune.megv" target="_blank"><img src={require('../src/images/facebook.png')} alt="logo-facebook"/></a></li>
                    <li><a href="https://www.twitter.com/dunetchka_" target="_blank"><img src={require('../src/images/twitter.png')} alt="logo-twitter"/></a></li>
                    <li><a href="https://www.linkedin.com/in/dune-megv" target="_blank"><img src={require('../src/images/linkedin.png')} alt="in-logo"/></a></li>
                    <li><a href="https://www.github.com/dune0" target="_blank"><img src={require('../src/images/github.png')} alt="octocat"/></a></li>
                </ul>
            </div>
        </div> 
        )
    }
}

export default Header;