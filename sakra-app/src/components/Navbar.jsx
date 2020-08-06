import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
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

            <Link to="/spells" className="navbar-item">
              Spells
            </Link>
            <Link to="/traps" className="navbar-item">
              Traps
            </Link>
            <Link to="/names" className="navbar-item">
              By Names
            </Link>
          </div>
          <Link to="/favorites" className="navbar-item">
            <i className="fas fa-heart" style={{ marginRight: "5px" }}></i>{" "}
            Favorites
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
