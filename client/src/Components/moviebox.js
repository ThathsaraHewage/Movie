import React, { useState, useEffect } from "react";
import { Modal, show, Button } from "react-bootstrap";

const API_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
const API_GENRE =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f5baf8c74c7d5f00a242c165979d0913";

function MovieBox({
    title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    overview,
    genre_ids,
}) {
    const ImageAPI = API_IMAGE_BASE + poster_path;
    const BackDropImageAPI = API_IMAGE_BASE + backdrop_path;

    const [show, setShow] = useState(false);
    const [genre, setGenre] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="card text-center mb-3">
            <div className="card-body">
                <img className="card-img-top" src={ImageAPI} />
                <h5>{title}</h5>
                <div className="card-body">
                    <button type="button" className="button button2" onClick={handleShow}>
                        More
                    </button>
                    <Modal show={show} size="xl" onHide={handleClose}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{ backgroundImage: `url(${BackDropImageAPI})` }}>
                                <img className="imagecenter" src={ImageAPI} />
                            </div>
                            <br /> <br />
                            <h5>{title}</h5>
                            <p>
                                <b>Released Date :</b> {release_date}
                            </p>
                            <p>
                                <b>Overview : </b>
                            </p>
                            <p>{overview}</p>
                            {/* TODO : get genre name by passing genre id from the api */}
                            <p>
                                <b>Genre :</b> { }
                            </p>
                            <p>
                                <b>Average Vote:</b> {vote_average}/10
                            </p>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default MovieBox;
