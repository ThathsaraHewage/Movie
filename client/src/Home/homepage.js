import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieBox from "../Components/moviebox";
import NavBar from '../Components/navbar'

const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=82fe3f14052d63038671e6b2d8673c4b";

export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <h2>TRENDING MOVIES</h2>

            <div className="container">
                <div className="grid">
                    {movies.map((mov) => (
                        <MovieBox key={mov.id} {...mov} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Home;
