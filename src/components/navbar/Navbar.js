import React from "react";
// import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const unactiveLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="nav-row">
        <ul className="nav-list">
          {/* TODO исправить классы */}
          <li className="unactiveLink">
            <a href="#!">Coffee House</a>
          </li>
          <li className="unactiveLink">
            <a href="#!">Our Coffee</a>
          </li>
          <li className="unactiveLink">
            <a href="#!">For your pleasure</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
