import React from 'react';

import Navbar from '../navbar/Navbar';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <Navbar />
                <h1 className="header__title">
                    Everything You Love About Coffee
                </h1>
                <p className="header__subtitle">We makes every day full of energy and taste</p>
                <p className="header__subtitle">Want to try our beans?</p>
                <a href="#!" className="header__more">More</a>
            </div>
        </header>
    )
}

export default Header;