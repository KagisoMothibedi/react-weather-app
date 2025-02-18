import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="container">
      <img src="./logo.svg" alt="brand-logo"></img> <br />
      <form>
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
      <hr />
      <h1>San Francisco</h1>
      <div className="details-section">
        <div className="details">
          <p>Tuesday 08:34, few clouds </p>
          <p>Humidity: 85%, Wind: 4.63km/h</p>
        </div>
        <div className="details">
          <h3>10</h3>
        </div>
      </div>
      <hr />
      <p>
        This project was coded by <a href="shecodes.io">SheCodes</a> and is
        open-sourced on <a href="https://github.com/KagisoMothibedi"> GitHub</a>{" "}
        and hosted on <a href=""> Netlify</a>
      </p>
    </div>
  );
}
