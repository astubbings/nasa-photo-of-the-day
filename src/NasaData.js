import React, { useState, useEffect} from "react";
import axios from "axios";

import NasaCard from "./NasaCard";

export default function NasaData() {
    
    const [nasaPhotos, setNasaPhotos] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=KoJjTr09w4X5Q6d7RYj66U3KfVmwezrgxNOYLabD`)
        .then(response => {
          console.log(response.data);
          setNasaPhotos(response.data);
        })
        .catch(error => {
          console.log("the nasa photo was not returned", error);
        });
    }, []);

    return (
      <div /*className="film"*/>
            
            <NasaCard
              imgUrl={nasaPhotos.url}
              date={nasaPhotos.date}
              title={nasaPhotos.title}
              desc={nasaPhotos.explanation}
            />

        {/* {nasaPhotos.map(pics => {
          return (
            <NasaCard
              imgUrl={pics.url}
              date={pics.date}
            />
          );
        })} */}

      </div>
    );
  }