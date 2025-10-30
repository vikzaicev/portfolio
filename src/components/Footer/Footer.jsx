import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import tw from "./../../img/icons/twitter.svg";
import lin from "./../../img/icons/linkedin.svg";
import git from "./../../img/icons/gitHub.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={tw} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={git} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={lin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
