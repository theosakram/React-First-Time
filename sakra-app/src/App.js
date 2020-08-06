import React from "react";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Details,
  Names,
  Favorites,
  Home,
  Monsters,
  Spells,
  Traps,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ paddingBottom: "25px", background: "#271033" }}
    >
      <Router>
        <Navbar />

        <Switch>
          <Route path="/traps">
            <Traps />
          </Route>
          <Route path="/names/">
            <Names />
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/monsters/:type" children={<Monsters />} />
          <Route path="/details/:id" children={<Details />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <div className="container">
          <Pagination />
        </div> */}
      </Router>
    </div>
  );
}

export default App;
