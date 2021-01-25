import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar blue darken-3">
        <div className="nav-wrapper">
          <div className="navbar-container">
            <a href="http://iding.ir" className="logo">
              <span></span>
              Lazy Poker
            </a>

            <ul>
              <a
                className="github"
                href="https://github.com/iding-ir/react-redux-lazy-poker"
              >
                Github
                <span></span>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
