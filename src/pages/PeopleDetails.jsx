import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";


const PeopleDetails = ({ peoples }) => {
  const { index } = useParams();
  console.log('Index from URL:', index);

  const peopleIndex = parseInt(index, 10);
  console.log('Parsed Index:', peopleIndex);

  const people = peoples[peopleIndex];
  console.log('Selected People:', people);

  if (!people) {
    console.log('People not found');
    return <div>People not found</div>;
  }

  const Container = styled.div`
    height: 180;
    width: 270;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    color: white;
    background-color: #293D6F;
    font-size: 1.5em;
    padding: 5px;
    border-radius: 8px;
    text-align: left;
  `;


  return (
    <div>      
    <Container>
    <h3>People Specs</h3>
    <ul>
      <h3>{people.name} {' '}Details</h3>
      Name: {people.name}<br/>
      Gender: {people.gender}<br/>
      Hair Color:{people.hair_color}<br/>
      Homeworld:{people.homeworld}<br/>
      Eye Color:{people.eye_color}<br/>
      Skin Color: {people.skin_color}<br/>
      Created:{people.created.toLocaleString().slice(0,10)}
    </ul>
    
  </Container>
  </div>

  );
};

export default PeopleDetails;
