import React, { useState } from "react";
import Navbar from "./components/Navbar";
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

export const context = React.createContext();

function App() {
  const [useTheme, changeUseTheme] = useState("light");
  return (
    <context.Provider
      value={{
        theme: useTheme,
        changeTheme: (data) => changeUseTheme(data),
      }}
    >
      <div
        className="App"
        style={{
          paddingBottom: "25px",
          background: `${useTheme === "dark" ? "#37383F" : "#EEEEEE"}`,
        }}
      >
        <Router>
          <Navbar />

          <Switch>
            <Route path="/traps">
              <Traps />
            </Route>
            <Route path="/By Names">
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
        </Router>
      </div>
    </context.Provider>
  );
}

export default App;
