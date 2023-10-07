import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "./slide.css";

const API_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function CarousalAutoSlider({ title, poster_path }) {
    // movie images fetching API url
    const ImageAPI = API_IMAGE_BASE + poster_path;

    return (
        <div>
            <Carousel>
                <div>
                    <img src={ImageAPI} height="300px" width="200px" />
                    <p className="legend">{title}</p>
                </div>
            </Carousel>
        </div>
    );
}

export default CarousalAutoSlider;
