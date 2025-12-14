import React from "react";
import "../App.css";
import Navbar from "./Navbar";

const Tracking = () => {
  // get current date and time
  const date = new Date();
  const showDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <>
      <div class="header">
        <div class="title">
          <h1>Track Time</h1>
        </div>
        <Navbar />
      </div>
      <div id="tracking-intro">
        <p>
          Use the form below to track how much time you spend on different
          activities throughout your day. Select the time block, log your
          activity in a few words, the time category, and the level of fun and
          meaning on a scale of 1-4.
        </p>
        <p>
            Categories:
            - Career can mean your work if you are employed, or school if you are a student, so the time you spend in classes or studying.
        </p>
      </div>
      <div id="date">
        <h3>Current Date: {showDate}</h3>
      </div>
      <div id="timebox">
        <h3>{showTime}</h3>
        <h5 id="current-category"></h5>
      </div>
      <form id="tracking-form">
        <label for="time-block">Time Block:</label>
        <input type="text" id="from"required /> to <input type="text" id="to" required />
        <br />
        <label for="activity">Activity:</label>
        <input type="text" id="activity" required />
        <br />
        <label for="category">Category:</label>
        <select id="category" required>
          <option value="career">Career</option>
          <option value="financial">Financial</option>
          <option value="spiritual">Spiritual</option>
          <option value="physical">Physical</option>
          <option value="intellectual">Intellectual</option>
          <option value="family">Family</option>
          <option value="social">Social</option>
        </select>
        <br/>
        <label for="fun-level">Fun Level (1-4):</label>
        <input type="number" id="fun-level" min="1" max="4" required />
        <br />
        <label for="meaning-level">Meaning Level (1-4):</label>
        <input type="number" id="meaning-level" min="1" max="4" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Tracking;
