import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const printLocation = () => {
    console.log(latitude, longitude);
  };

  return (
    <div className="App">
      <div className="search_container">
        <div className="title">Hotel Reservation Manager</div>
        <input
          className="search_input"
          placeholder="Input the Radius in Kilometers"
        ></input>
        <button className="search_button" onClick={printLocation}>
          Search
        </button>
      </div>
      <div className="search_results">
        <div className="result_container">
          Search results will appear here..
        </div>
      </div>
    </div>
  );
}

export default App;
