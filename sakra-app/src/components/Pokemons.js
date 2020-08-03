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
      const result = this.randArr();
    }
  }

  render() {
    const { poke } = this.state;
    const { pokemons } = this.props;
    const pokemonStarter = pokemons.filter((x, y) => y < 5);
    return (
      <PokemonContainer
        pokemons={poke.length ? poke : pokemonStarter}
        randomizer={this.randArr}
      ></PokemonContainer>
    );
  }
}

export default Pokemons;
