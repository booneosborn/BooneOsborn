import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <header id="header">
        <div className="content">
          <h1><a href="#">Boone Osborn</a></h1>
          <p>Full stack developer with over 14 years experience.<br />
          A passion and expertise for the front end.<br/>
          Team leader.</p>
          <ul className="actions">
            <li><a href="#one" className="button icon fa-chevron-down scrolly">About</a></li>
            <li><a href="#two" className="button icon fa-chevron-down scrolly">Technologies</a></li>
            <li><a href="#three" className="button icon fa-chevron-down scrolly">Work History</a></li>
            <li><a href="#four" className="button icon fa-chevron-down scrolly">Contact</a></li>
          </ul>
        </div>
        <div className="image frame">
          <div className="inner">
            <img src="http://booneosborn.azurewebsites.net/images/me.jpg" alt="" />
          </div>
        </div>
      </header>
    );
  }
}

export default App;
