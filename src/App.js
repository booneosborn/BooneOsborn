import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <header id="header">
        <div className="content" data-aos="fade-in" data-aos-delay="200" data-aos-duration="2500">
          <h1><a href="#">Boone Osborn</a></h1>
          <p>
            <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500">Full stack developer with over 14 years experience.</div>
            <div data-aos="fade-right" data-aos-delay="2000" data-aos-duration="1500">A passion and expertise for the front end.</div>
            <div data-aos="fade-right" data-aos-delay="3000" data-aos-duration="1500">Team leader.</div>
          </p>
          <ul className="actions">
            <li><a href="#about" className="button icon fa-chevron-down scrolly">About</a></li>
            <li><a href="#technologies" className="button icon fa-chevron-down scrolly">Technologies</a></li>
            <li><a href="#history" className="button icon fa-chevron-down scrolly">Work History</a></li>
            <li><a href="#contact" className="button icon fa-chevron-down scrolly">Contact</a></li>
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
