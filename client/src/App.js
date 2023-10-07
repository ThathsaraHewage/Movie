
import { useEffect, useState } from 'react';
import './App.css';

import API from './Utils/index';
import MovieBox from './Components/moviebox';
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=82fe3f14052d63038671e6b2d8673c4b";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL).
      then((res) => res.json()).
      then(data => {
        console.log(data);
        setMovies(data.results)
      })
  }, []);

  return (
    <div>
      {movies.map((mov) => <MovieBox key={mov.id} {...mov} />)}
    </div>
  );
}

export default App;
