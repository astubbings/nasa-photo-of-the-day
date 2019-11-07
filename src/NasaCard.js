import React from "react";
import styled from "styled-components";

const WholeCardContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 2%;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 70%;
  
  
`
const ImgFromNasa = styled.img`
  max-width: 100%;

`

const InfoContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 2%;
`

const ImageTitleStyled = styled.h1`
 color: rebeccapurple;
`


const NasaCard = props => {
    return (
      <WholeCardContainer>
        <ImgContainer>
        <ImgFromNasa src={props.imgUrl} alt="NASA pic of the day"/>
        </ImgContainer>

        <InfoContainer>
          <ImageTitleStyled>{props.title}</ImageTitleStyled>
          <h3>Picture Taken on : {props.date}</h3>
          <p>{props.desc}</p>
        </InfoContainer>
          
        
        

      </WholeCardContainer>
    );
  };
  
  export default NasaCard;