import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar() {
  const type = [
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

  const type2 = [
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
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Monsters One</a>

              <div class="navbar-dropdown">
                <Link to={`/monsters/${type[0]}`} class="navbar-item">
                  Effect
                </Link>
                <Link to={`/monsters/${type[1]}`} class="navbar-item">
                  Flip Effect
                </Link>
                <Link to={`/monsters/${type[2]}`} class="navbar-item">
                  Fusion
                </Link>
                <Link to={`/monsters/${type[3]}`} class="navbar-item">
                  Gemini
                </Link>
                <Link to={`/monsters/${type[4]}`} class="navbar-item">
                  Link
                </Link>
                <Link to={`/monsters/${type[5]}`} class="navbar-item">
                  Normal
                </Link>
                <Link to={`/monsters/${type[6]}`} class="navbar-item">
                  Normal Tuner
                </Link>
                <Link to={`/monsters/${type[7]}`} class="navbar-item">
                  Pendulum Effect
                </Link>
                <Link to={`/monsters/${type[8]}`} class="navbar-item">
                  Pendulum Effect Fusion
                </Link>
                <Link to={`/monsters/${type[9]}`} class="navbar-item">
                  Pendulum Flip Effect
                </Link>
                <Link to={`/monsters/${type[10]}`} class="navbar-item">
                  Pendulum Normal
                </Link>
                <Link to={`/monsters/${type[11]}`} class="navbar-item">
                  Pendulum Tuner Effect
                </Link>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Monsters Two</a>

              <div class="navbar-dropdown">
                <Link to={`/monsters/${type2[0]}`} class="navbar-item">
                  Ritual
                </Link>
                <Link to={`/monsters/${type2[1]}`} class="navbar-item">
                  Ritual Effect
                </Link>
                <Link to={`/monsters/${type2[2]}`} class="navbar-item">
                  Spirit
                </Link>
                <Link to={`/monsters/${type2[3]}`} class="navbar-item">
                  Synchro
                </Link>
                <Link to={`/monsters/${type2[4]}`} class="navbar-item">
                  Synchro Pendulum Effect
                </Link>
                <Link to={`/monsters/${type2[5]}`} class="navbar-item">
                  Synchro Tuner
                </Link>
                <Link to={`/monsters/${type2[6]}`} class="navbar-item">
                  Toon
                </Link>
                <Link to={`/monsters/${type2[7]}`} class="navbar-item">
                  Tuner
                </Link>
                <Link to={`/monsters/${type2[8]}`} class="navbar-item">
                  Union Effect
                </Link>
                <Link to={`/monsters/${type2[9]}`} class="navbar-item">
                  XYZ
                </Link>
                <Link to={`/monsters/${type2[10]}`} class="navbar-item">
                  XYZ Pendulum Effect
                </Link>
              </div>
            </div>

            <Link to="/spells" className="navbar-item">
              Spells
            </Link>
            <Link to="/traps" className="navbar-item">
              Traps
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
