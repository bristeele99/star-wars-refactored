import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";


const StarshipDetails = ({ starships }) => {
  const { index } = useParams();
  console.log('Index from URL:', index);

  const starshipIndex = parseInt(index, 10);
  console.log('Parsed Index:', starshipIndex);

  const starship = starships[starshipIndex];
  console.log('Selected Starship:', starship);

  if (!starship) {
    console.log('Starship not found');
    return <div>Starship not found</div>;
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
    <h3>Starship Specs</h3>
    <ul>
      <h3>{starship.name} {' '}Details</h3>
      name: {starship.name}<br/>
      model: {starship.model}<br/>
      manufacturer:{starship.manufacturer}<br/>
      passengers:{starship.passengers}<br/>
      crew:{starship.crew}<br/>
      created:{starship.created.toLocaleString().slice(0,10)}
    <ul>
      {starship.films.map((film, i) => (
        <li key={i}>
        <Link to={`/films/${i}`}>Film {i + 1}</Link>
      </li>
      ))}
    </ul>
    </ul>
    
  </Container>
  </div>

  );
};

export default StarshipDetails;
