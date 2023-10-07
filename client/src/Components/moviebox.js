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
        <div className="card text-center mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMAGE_BASE + poster_path} />
                <h5>{title}</h5>
                <button>More ... </button>
            </div>
        </div>
    );
}

export default MovieBox;
