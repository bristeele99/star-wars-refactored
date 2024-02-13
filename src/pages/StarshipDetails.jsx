import React from 'react';
import { useParams } from 'react-router-dom';

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

  return (
    <div>
      <h1>Starship Specs</h1>
      <p>Name: {starship.name}</p>
      <p>Crew Size: {starship.crew}</p>
      <p>Model: {starship.model}</p>
      <p>Films:</p>
      <ul>
        {starship.films.map((film, i) => (
          <li key={i}>{film}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipDetails;
