import React from 'react';
import './NavItem.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function NavItem({to, children, active}) {
    return (
        <div className="navList">
            <Link 
                className={`${active && active ? "active" : ""}`}
                to={`${to}`}>{children}</Link>
        </div>
    )
}
