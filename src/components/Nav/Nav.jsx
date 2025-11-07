import { NavLink } from "react-router";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo" end>
            <strong>Freelancer</strong> portfolio
          </NavLink>
          <BtnDarkMode />
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
