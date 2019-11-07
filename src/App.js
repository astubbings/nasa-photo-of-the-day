import React from "react";
import "./App.css";
import NasaData from "./NasaData";

import styled from 'styled-components'

// the following is the BASIC data request to see data structure and console log it
// import axios from "axios";

// axios
//   .get(`https://api.nasa.gov/planetary/apod?api_key=KoJjTr09w4X5Q6d7RYj66U3KfVmwezrgxNOYLabD`)
//   .then(response => {
//     console.log(response);
    
//   })
//   .catch(error => {
//     console.log("the nasa photo was not returned", error);
//   });

 // END the BASIC data request  

const Instructions = styled.p`
    color: dodgerblue;
    text-align: center;
    `

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2%;
`

function App() {
  return (
    <AppContainer>
      <Instructions>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket emoji'> 🚀</span>!
      </Instructions>


      <NasaData/>
    </AppContainer>
  );
}

export default App;
