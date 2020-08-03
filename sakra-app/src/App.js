import React, { Component } from "react";
import Pokemons from "./components/Pokemons";
import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const result = await (
      await fetch("https://api.pokemontcg.io/v1/cards")
    ).json();
    this.setState({ pokemons: result.cards });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="App">
        <Pokemons pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
