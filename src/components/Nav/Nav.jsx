import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";
import { useToLocalStorage } from "../../Utils/useToLocalStorage";

function Nav() {
  const [dark, setDark] = useToLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const btnRef = useRef(null);

  const BtnClickHandler = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [dark]);

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

          <button
            ref={btnRef}
            onClick={BtnClickHandler}
            // className={
            //   dark ? "dark-mode-btn" : "dark-mode-btn dark-mode-btn--active"
            // }
            className="dark-mode-btn"
          >
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
