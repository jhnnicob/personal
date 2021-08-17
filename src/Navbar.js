import React,{useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Navbar.css';
import NavItem from './NavItem';

export default function Navbar() { 

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY === 0  && window.scrollY < 338) {
                history.push("");
            }else if(window.scrollY > 338 && window.scrollY < 619){
                history.push("#about");
            }else if(window.scrollY > 619 && window.scrollY < 1982) {
                history.push("#projects");
            }else if(window.scrollY > 1982 && window.scrollY < 2449) {
                history.push("#contact");
            }
            return () => {
                window.removeEventListener("scroll");
            }
        })
    }, [history])

    return (
        <nav className={"navbar"}>
                <NavItem to="#home" active={location.hash === "#home" || location.hash === ""}>HOME</NavItem>
                <NavItem to="#about" active={location.hash === "#about"}>ABOUT</NavItem>
                <NavItem to="#projects" active={location.hash === "#projects"}>PROJECTS</NavItem>
                <NavItem to="#contact" active={location.hash === "#contact"}>CONTACT</NavItem>
        </nav>
    )
}

