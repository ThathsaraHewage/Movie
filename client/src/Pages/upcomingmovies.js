import React, { Component, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarousalAutoSlider from "../Components/carousal";

import NavBar from "../Components/navbar";

// TODO : add to a seperate constant file and use
// Movies information fetching API URL - Upcoming movies 
const API_UPCOMING_MOVIES =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=f5baf8c74c7d5f00a242c165979d0913";

function UpcomingMovies() {
    const [upcomingmovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        fetch(API_UPCOMING_MOVIES)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUpcomingMovies(data.results);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <h2>UPCOMING MOVIES</h2>
            <div className="container">
                <div className="grid">
                    {upcomingmovies.map((upmov) => (
                        <CarousalAutoSlider key={upmov.id} {...upmov} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default UpcomingMovies;
