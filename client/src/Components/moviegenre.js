import React from "react";

// TODO : add to a seperate constant file and use
// IGenre fetching API URL
const API_GENRE =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f5baf8c74c7d5f00a242c165979d0913";

function MovieGenre({ genreID }) {
    {
        /* TODO : get genre name by passing genre id from the api */
    }
    return (
        <div>
            <button className="movieGenreButton movieGenre">{genreID}</button>
        </div>
    );
}

export default MovieGenre;
