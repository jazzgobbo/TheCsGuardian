import React from "react";
import "../style/NavBar.css";


const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="home">
                <text>Home</text>
            </div>
            <div className="about">
                <text>About</text>
            </div>
            <div className="title">
                <text>The CS Guardian</text>
            </div>
            <div className="browse">
                <text>Browse</text>
            </div>
            <div className="log-in">
                <text>Log In</text>
            </div>
        </nav>
      )
    }

export default NavBar;