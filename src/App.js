import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="header">
      <div class="title">
        <h1>How to Use Website</h1>
      </div>
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
    </div>
  );
}

export default App;
