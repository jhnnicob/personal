import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}

