import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div class="nav">
        <ul id="navbar">
          <li class="navitem">
            <a href="aboutme.html">About Me</a>
          </li>
          <li class="navitem">
            <a href="metrics.html">Metrics</a>
          </li>
          <li class="navitem">
            <a href="tracking.html">Tracking</a>
            <li class="navitem">
              <a href="home.html">Home</a>
            </li>
          </li>
        </ul>
      </div>
    )
}

export default Navbar;