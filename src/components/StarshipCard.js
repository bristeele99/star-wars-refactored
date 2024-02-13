import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getAllStarships } from "../services/sw-api";
import StarshipDetails from "../pages/StarshipDetails";
import styled from "styled-components";

export default function StarshipCard() {
  const Container = styled.div`
    height: 180px;
    width: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    color: white;
    background-color: #293D6F;
    font-size: 1.8em;
    padding: 5px;
    border-radius: 8px;
    text-align: center;
  `;

  const [starships, setStarships] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipData = await getAllStarships();
        console.log('Starships fetched:', starshipData);
        setStarships(starshipData.results);
      } catch (error) {
        console.error('Error fetching starships: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="cards">
        {starships.map((starship, i) => (
          <Link key={i} to={`/starshipdetails/${i}`}>
            <Container>
              {starship.name}
            </Container>
          </Link>
        ))}
      </div>

      <Routes>
      
        <Route path="/starshipdetails/:index" element={<StarshipDetails starships={starships} />}/>
      </Routes>
    </div>
  );
}
