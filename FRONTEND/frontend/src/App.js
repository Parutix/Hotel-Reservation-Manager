import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [radius, setRadius] = useState("");
  const [hotels, setHotels] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const getHotels = async () => {
    if (radius === "") {
      console.error("Radius is required");
      setMessage("Radius is required");
      setHotels([]);
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:2911/hotels/gethotels?userLatitude=${latitude}&userLongitude=${longitude}&radius=${radius}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setHotels(data);
          setMessage("");
        } else {
          setHotels([]);
          setMessage("No hotels found within this radius.");
        }
      } else {
        setHotels([]);
        setMessage("Failed to fetch hotels");
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setHotels([]);
      setMessage("Error fetching hotels");
    }
  };

  return (
    <div className="App">
      <div className="search_container">
        <div className="title">Hotel Reservation Manager</div>
        <input
          className="search_input"
          placeholder="Input the Radius in Kilometers"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />
        <button className="search_button" onClick={getHotels}>
          Search
        </button>
      </div>
      <div className="search_results">
        <div className="result_container">
          {message && <div>{message}</div>}
          {hotels.length > 0 && (
            <ul>
              {hotels.map((hotel) => (
                <li key={hotel.id}>{hotel.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
