import React from "react";
import "../App.css";
import Navbar from "./Navbar";

const Tracking = () => {
  // get current date
  const date = new Date();
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
      </div>
    </>
  );
};

export default Tracking;
