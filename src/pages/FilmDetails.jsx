import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";

const FilmDetails = ({ films }) => {
    const { index } = useParams();
    console.log('Index from URL:', index);

    const filmIndex = parseInt(index, 10);
    console.log('Parsed Index:', filmIndex);

    const film = films[filmIndex];
    console.log('Selected Film:', film);

    if(!film){
        console.log('Film not found');
        return <div>Film not found</div>;
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
                <h3>Film Details</h3>
                <ul>
                    <h3>{film.title} {' '} Details</h3>
                    Episode: {film.episode_id}<br/>
                    Director: {film.director}<br/>
                    Producer: {film.producer}<br/>
                    Release Date: {film.release_date}<br/>

                </ul>
                <ul>
                    {films.peoples.map((people, i) => (
                        <li key={i}>
                        <Link to={`/peoples/${i}`}>Characters {i + 1}</Link>
                    </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default FilmDetails;
