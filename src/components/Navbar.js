import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div class="nav">
      <ul id="navbar">
        <li class="navitem">
          <a href="About.jsx">About Me</a>
        </li>
        <li class="navitem">
          <a href="Metrics.jsx">Metrics</a>
        </li>
        <li class="navitem">
          <a href="Tracking.jsx">Tracking</a>
          <li class="navitem">
            <a href="Home.jsx">Home</a>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
