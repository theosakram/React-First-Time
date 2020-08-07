import React, { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { context } from "../App";
import FavoriteButton from "./FavoriteButton";
import ThemeButton from "./ThemeButton";

function Navbar() {
  const types = [
    "Effect",
    "Flip Effect",
    "Fusion",
    "Gemini",
    "Link",
    "Normal",
    "Normal Tuner",
    "Pendulum Effect",
    "Pendulum Effect Fusion",
    "Pendulum Flip Effect",
    "Pendulum Normal",
    "Pendulum Tuner Effect",
  ];

  const types2 = [
    "Ritual",
    "Ritual Effect",
    "Spirit",
    "Synchro",
    "Synchro Pendulum Effect",
    "Synchro Tuner",
    "Toon",
    "Tuner",
    "Union Effect",
    "XYZ",
    "XYZ Pendulum Effect",
  ];

  const types3 = ["Spells", "Traps"];

  const { theme } = useContext(context);

  return (
    <nav
      className={`navbar ${theme === "light" ? "is-light" : "is-dark"}`}
      role="navigation"
      aria-label="main navigation"
      style={{
        borderBottom: `1px solid ${theme === "dark" ? "white" : "black"}`,
      }}
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg"
            width="112"
            height="28"
          ></img>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Monsters One</a>

            <div className="navbar-dropdown">
              {types.map((type) => (
                <Link to={`/monsters/${type}`} className="navbar-item">
                  {type}
                </Link>
              ))}
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Monsters Two</a>

            <div className="navbar-dropdown">
              {types2.map((type) => (
                <Link to={`/monsters/${type}`} className="navbar-item">
                  {type}
                </Link>
              ))}
            </div>
          </div>

          {types3.map((type) => (
            <Link to={`/types/${type}`} className="navbar-item">
              {type}
            </Link>
          ))}

          <Link to={"/By Names"} className="navbar-item">
            By Names
          </Link>
        </div>

        {theme === "light" ? (
          <ThemeButton color="dark" />
        ) : (
          <ThemeButton color="light" />
        )}

        <FavoriteButton />
      </div>
    </nav>
  );
}

export default Navbar;
