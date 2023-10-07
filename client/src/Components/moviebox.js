import React from "react";

const API_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieBox({
    title,
    poster_path,
    vote_average,
    released_date,
    overview,
}) {
    console.log(API_IMAGE_BASE + poster_path);
    return (
        <div>
            <p>{title}</p>
            <img src={API_IMAGE_BASE + poster_path} />
        </div>
    );
}

export default MovieBox;
