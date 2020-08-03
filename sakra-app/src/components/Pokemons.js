import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

class App extends Component {
  state = {
    poke: [],
  };

  randArr = () => {
    let newPokemonArr = Array.from(
      { length: 5 },
      (x, y) =>
        this.props.pokemons[
          Math.floor(Math.random() * this.props.pokemons.length)
        ]
    );
    this.setState({ poke: newPokemonArr });
  };

  render() {
    const { poke } = this.state;
    if (!poke.length) {
      const { pokemons } = this.props;
      return (
        <div className="container">
          <div className="columns">
            {pokemons
              .filter((x, y) => y < 5)
              .map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon.name}
                  image={pokemon.imageUrl}
                />
              ))}
          </div>
          <button className="button is-success" onClick={this.randArr}>
            Random
          </button>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="columns">
            {poke.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon.name}
                image={pokemon.imageUrl}
              />
            ))}
          </div>
          <button className="button is-success" onClick={this.randArr}>
            Random
          </button>
        </div>
      );
    }
  }
}

export default App;
