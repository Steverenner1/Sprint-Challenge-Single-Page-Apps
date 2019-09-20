import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display:flex;
    width: 500px;
    align-items: space-around;
    justify-content:center;
`

const StyledCard = styled(Card)`
    height: 250px;
    width: 40%;
    border: 1px solid black;
    margin-bottom: 20px;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [people, setPeople]= useState([{}]);
  
  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then((response) => {
      console.log(response);
      const characterArray = response.data.results;
      setPeople(characterArray);
    })
    .catch(error => {
      console.log("No data returned", error)
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <div className="App">
        {people.map(char => {
          return <StyledDiv>
            <StyledCard>
              <CardTitle>{char.name}</CardTitle>
              <CardText>
              Gender: {char.gender}
              </CardText>
              <CardText>
              Species: {char.species}
              </CardText>
              <p>Photo: {char.image}</p>


            </StyledCard>
          </StyledDiv>
        })}



      </div>
    </section>
  );
}
