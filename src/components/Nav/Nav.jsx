import React from "react";
import { NavLink } from "react-router";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo" end>
            <strong>Freelancer</strong> portfolio
          </NavLink>
          {/* <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a> */}

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className="nav-list__link nav-list__link--active"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/Projects" className="nav-list__link" end>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/Contacts" className="nav-list__link" end>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
