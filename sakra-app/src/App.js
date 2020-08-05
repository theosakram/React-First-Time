import React from "react";
import YugiAll from "./components/YugiAll";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Details, Home, Monsters, Spells, Traps } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App background">
      <Router>
        <Navbar />
        <SearchBar />

        <Switch>
          <Route path="/traps">
            <Traps />
          </Route>
          <Route path="/spells">
            <Spells />
          </Route>
          <Route path="/monsters/:type" children={<Monsters />} />
          <Route
            path="/details/:id"
            children={<Details />}
            component={<Details />}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div className="container">
          <Pagination />
        </div>
      </Router>
    </div>
  );
}

export default App;
