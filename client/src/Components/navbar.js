import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        // Navigation bar with routes 
        <div class="topnav">
            <Link to='/'>
                Home
            </Link>

            <Link to='/upcoming-movies'>
                Upcoming Movies
            </Link>

        </div>
    );
}

export default NavBar;
