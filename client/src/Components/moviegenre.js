import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
