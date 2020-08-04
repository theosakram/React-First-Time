import React, { Component } from "react";
import PokemonContainer from "./PokemonContainer";

class Pokemons extends Component {
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
    return newPokemonArr;
  };

  componentDidUpdate(prevProps) {
    if (prevProps.pokemons !== this.props.pokemons) {
      this.randArr();
    }
  }

  render() {
    const { poke } = this.state;
    return (
      <PokemonContainer
        pokemons={poke}
        randomizer={this.randArr}
      ></PokemonContainer>
    );
  }
}

export default Pokemons;
