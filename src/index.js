import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Technologies from './Technologies';
import History from './History';
import Contact from './Contact';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
ReactDOM.render(
  <About />,
  document.getElementById('about')
);
ReactDOM.render(
  <Technologies />,
  document.getElementById('technologies')
);
ReactDOM.render(
  <History />,
  document.getElementById('history')
);
ReactDOM.render(
  <Contact />,
  document.getElementById('contact')
);

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            header = document.getElementById("header"),
            about = document.getElementById("about");
        if (distanceY > shrinkOn) {
            header.classList.add("smaller");
            about.classList.add("scrolled");
        } else {
            if (header.classList.contains("smaller")) {
            header.classList.remove("smaller");
            about.classList.remove("scrolled");
            }
        }
    });
}
window.onload = init();
