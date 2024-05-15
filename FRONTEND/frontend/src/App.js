import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="search_container">
        <div className="title">Hotel Reservation Manager</div>
        <input
          className="search_input"
          placeholder="Input the Radius in Kilometers"
        ></input>
        <button className="search_button">Search</button>
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
