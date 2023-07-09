import React from 'react';

const Header = () => {
    return (
        <>
            <div className="header">
                <h1 className="logo">Medo App</h1>
                <ul className="links">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Skills">Skills</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/Timeline">Timeline</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
