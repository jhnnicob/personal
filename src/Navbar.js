import React,{useState, useEffect} from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import './Navbar.css';
import NavItem from './NavItem';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);    
    const location = useLocation();

    const match = useRouteMatch();

    return (
        <nav className={`navbar ${show && "navbar__black"}`}>
                <NavItem to="#home" active={location.hash == "#home" || location.hash == "/"}>HOME</NavItem>
                <NavItem to="#about" active={location.hash == "#about"}>ABOUT</NavItem>
                <NavItem to="#projects" active={location.hash == "#projects"}>PROJECTS</NavItem>
                <NavItem to="#contact" active={location.hash == "#contact"}>CONTACT</NavItem>
        </nav>
    )
}

