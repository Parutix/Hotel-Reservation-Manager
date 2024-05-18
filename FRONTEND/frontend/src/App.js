import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [radius, setRadius] = useState("");
  const [hotels, setHotels] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [rooms, setRooms] = useState([]);

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

  const getRooms = async (hotelId) => {
    try {
      const response = await fetch(
        `http://localhost:2911/hotels/gethotelrooms?hotel_id=${hotelId}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setRooms(data);
          setMessage("");
        } else {
          setRooms([]);
          setMessage("No rooms found for this hotel.");
        }
      } else {
        setRooms([]);
        setMessage("Failed to fetch rooms");
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms([]);
      setMessage("Error fetching rooms");
    }
  };

  const handleHotelClick = (hotelId) => {
    setSelectedHotelId(hotelId);
    getRooms(hotelId);
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
            <div className="hotels_and_rooms_container">
              <div className="hotels_list">
                <h3>Hotels</h3>
                <ul>
                  {hotels.map((hotel) => (
                    <li
                      key={hotel.id}
                      onClick={() => handleHotelClick(hotel.id)}
                    >
                      {hotel.name}
                    </li>
                  ))}
                </ul>
              </div>
              {selectedHotelId && (
                <div className="rooms_list">
                  <h3>Rooms for Hotel ID: {selectedHotelId}</h3>
                  <ul>
                    {rooms.map((room, index) => (
                      <li
                        key={room.id}
                        style={{
                          backgroundColor: room.is_available ? "green" : "red",
                          color: "white",
                          padding: "10px",
                          margin: "5px 0",
                        }}
                      >
                        Room {index + 1}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
