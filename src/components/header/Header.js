import React from "react";

import Navbar from "../navbar/Navbar";

import "./Header.scss";
import Divider from "../divider/divider";
import Btn from "../btn/btn";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Navbar />
          <h1 className="header__title">Everything You Love About Coffee</h1>
          <Divider />
          <p className="header__subtitle">
            We makes every day full of energy and taste
          </p>
          <p className="header__subtitle">Want to try our beans?</p>
          <Btn className="header__btn"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
