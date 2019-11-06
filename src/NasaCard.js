import React from "react";

const NasaCard = props => {
    return (
      <div >


        <h2>{props.title}</h2>
        <h3>Picture Taken on : {props.date}</h3>  
        <img /*className="dog-image"*/ alt="NASA pic of the day" src={props.imgUrl}/>
        <p>{props.desc}</p>
        
      </div>
    );
  };
  
  export default NasaCard;