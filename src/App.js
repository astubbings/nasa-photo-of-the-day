import React from "react";
import "./App.css";
import NasaData from "./NasaData";


// the following is the BASIC data request to see data structure and console log it
import axios from "axios";

axios
  .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  .then(response => {
    console.log(response);
    
  })
  .catch(error => {
    console.log("the nasa photo was not returned", error);
  });

 // END the BASIC data request  

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket emoji'> 🚀</span>!
      </p>
      <NasaData/>
    </div>
  );
}

export default App;
