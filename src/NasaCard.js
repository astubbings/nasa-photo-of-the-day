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
  border: 1px solid lightcyan;
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 1%;
`
const ImageTitleStyled = styled.h1`
  color: rebeccapurple;
  background-color: paleturquoise;
  padding: 1%;
`
const DescTextStyled = styled.p`
  padding-left: 2%;
`
const DateTaken = styled.h2`
  padding-left: 2%;
`
const NasaCard = props => {
    return (
      <WholeCardContainer>
        <ImgContainer>
        <ImgFromNasa src={props.imgUrl} alt="NASA pic of the day"/>
        </ImgContainer>

        <InfoContainer>
          <ImageTitleStyled>{props.title}</ImageTitleStyled>
          <DateTaken>Picture Taken on : {props.date}</DateTaken>
          <DescTextStyled>{props.desc}</DescTextStyled>
        </InfoContainer>
          
        
        

      </WholeCardContainer>
    );
  };
  
  export default NasaCard;