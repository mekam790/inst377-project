import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import moment from "moment";
import { createClient } from "@supabase/supabase-js";

const Tracking = () => {
  // supabase setup
  const supabaseUrl = "https://pzqupoelaedeknqrrcay.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cXVwb2VsYWVkZWtucXJyY2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzY4NDQsImV4cCI6MjA4MTMxMjg0NH0.vFWkPmHRbyCM6gMl9ZrrRUFYN5rs1GK8nzxlJ1liMV8";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // get current date and time
  const date = new Date();
  const showDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const submitTracking = async (data) => {
    data.preventDefault();
    const timeData = new FormData(data.target);

    const timeEntry = {
        from: timeData.get("from"),
        to: timeData.get("to"),
        activity: timeData.get("activity"),
        category: timeData.get("category"),
        fun_level: parseInt(timeData.get("fun-level")),
        meaning_level: parseInt(timeData.get("meaning-level")),
    };

    const { error } = await supabase
    .from("time_tracker")
    .insert([timeEntry]);

    if (error) {
        console.error("Error inserting time entry:", error);
    }
    data.target.reset();
  };
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
          Categories: - Career can mean your work if you are employed, or school
          if you are a student, so the time you spend in classes or studying.
        </p>
      </div>
      <div id="date">
        {/* not dynamic yet*/}
        <h3>Current Date: {showDate}</h3>
      </div>
      <div id="timebox">
        <h3>{showTime}</h3>
        <h5 id="current-category"></h5>
      </div>
      <form id="tracking-form" onSubmit={submitTracking}>
        {/* can have min and max attributes, use to set restrictions when user first inputs sleep time*/}
        <label for="from">Time Block Start:</label>
        <input type="time" id="from" name="from" step="1800" required />
        <br />
        <label for="to">Time Block End:</label>
        <input type="time" id="to" name="from" step="1800" required />
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
        <br />
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
