
import './App.css';
// import Nav from "./components/Nav"
import { getAllStarships, getAllFilms, getAllPeoples } from "./services/sw-api.js"
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Starship from "./pages/StarshipDetails.jsx"
import FilmDetails from "./pages/FilmDetails.jsx"
import PeopleDetails from './pages/PeopleDetails.jsx';
import StarshipCards from "./components/StarshipCards.js"

function App() {
  const [starships, setStarships] = useState([]);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [films, setFilms] = useState(null);
  const [peoples, setPeoples] = useState(null);

  const fetchData = async (url) => {
      try {
          const starshipData = await getAllStarships(url);
          setStarships(starshipData.results);
          setPrevPageUrl(starshipData.previous);
          setNextPageUrl(starshipData.next);

          const filmData = await getAllFilms();
          setFilms(filmData.results);
        console.log(filmData,"This is FilmData")

        const peoplesData = await getAllPeoples();
        setPeoples(peoplesData.results);
      } catch (error) {
          console.error('Error fetching starships: ', error);
      }
  };

  const BASE_URL = 'https://swapi.dev/api/starships'
    // useEffect for initial data fetching
    useEffect(() => {
      fetchData(BASE_URL,'https://swapi.dev/api/films', 'https://swapi.dev/api/peoples');
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) {
        fetchData(nextPageUrl);
    }
};

const handlePrevPage = () => {
    if (prevPageUrl) {
        fetchData(prevPageUrl);
    }
};

  
    return (
        <div>
            {/* <Nav /> */}
          <button className='prev-button' onClick={ handlePrevPage} disabled={!prevPageUrl}>Previous</button>
          <button className='next-button' onClick={handleNextPage} disabled={!nextPageUrl}>Next</button>
          <div className="cards">
              <StarshipCards starships={starships}/>
          </div>
          <Routes>
                  <Route path="starships/:index" element={<Starship starships={starships} />} />
                  <Route path="films/:index" element={<FilmDetails films={films} />} />
                  <Route path="people/:index" element={<PeopleDetails peoples={peoples} />} />
          </Routes>
        </div>
    )
}

export default App;