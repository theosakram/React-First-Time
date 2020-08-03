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

  // async componentDidMount() {
  //   try {
  //     const result = await this.randArr();
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  render() {
    const { poke } = this.state;
    const { pokemons } = this.props;
    const pokemonStarter = pokemons.filter((x, y) => y < 5);
    if (!poke.length) {
      return (
        <PokemonContainer
          pokemons={pokemonStarter}
          randomizer={this.randArr}
        ></PokemonContainer>
      );
    }
    return (
      <PokemonContainer
        pokemons={poke}
        randomizer={this.randArr}
      ></PokemonContainer>
    );
  }
}

export default Pokemons;
