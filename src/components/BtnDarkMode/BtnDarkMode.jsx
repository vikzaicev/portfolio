import React from "react";
import { useEffect, useRef } from "react";
import { useToLocalStorage } from "../../Utils/useToLocalStorage";
import "./styles.css";

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

function BtnDarkMode() {
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
  );
}

export default BtnDarkMode;
