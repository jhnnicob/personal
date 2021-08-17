import { Button } from '@material-ui/core';
import React from 'react';
import './Header.css';
import Navbar from './Navbar';

export default function Header() {
    return (
        <div className="header withFull" id="home">
            <div className="header__body">
                <Navbar />
                <h1>Hello I'm <span className="myName">Nico Molon</span></h1>
                <p>Web Developer</p>
                <Button variant="outlined" color="primary" href="../resume\JohnNico_Molon_Resume.PDF" download>Download my resume</Button>
            </div>
        </div>
    )
}
