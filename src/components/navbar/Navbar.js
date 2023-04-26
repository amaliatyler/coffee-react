import React from 'react';
// import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const unactiveLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <ul className="nav-list">
                        <li className={({isActive }) => isActive? activeLink : unactiveLink}>
                            <a href="#!">
                                Coffee House
                            </a>
                        </li>
                        <li className={({isActive }) => isActive? activeLink : unactiveLink}>
                            <a href="#!">
                                Our Coffee
                            </a>
                        </li>
                        <li className={({isActive }) => isActive? activeLink : unactiveLink}>
                            <a href="#!">
                                For your pleasure
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

