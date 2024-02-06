import React from 'react';
import "../styles/components/NavBar.css";

const NavBar = ({ className }) => {
    return (
        <nav className={`navbar ${className}`}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
