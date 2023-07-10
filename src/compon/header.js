import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <h1 className="logo">
                    <Link to="/">Medo App</Link>
                </h1>
                <ul className="links">
                    <li><NavLink className="mainLink" to="/Home">Home</NavLink></li>
                    <li><NavLink className="mainLink" to="/About">About</NavLink></li>
                    <li><NavLink className="mainLink" to="/Skills">Skills</NavLink></li>
                    <li><NavLink className="mainLink" to="/Gallery">Gallery</NavLink></li>
                    <li><NavLink className="mainLink" to="/Timeline">Timeline</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
