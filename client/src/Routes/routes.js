import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/homepage';
import UpcomingMovies from '../Pages/upcomingmovies';

/*All routes to navigate to pages*/
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/upcoming-movies" exact Component={UpcomingMovies} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;