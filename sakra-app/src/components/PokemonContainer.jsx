import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

export class PokemonContainer extends Component {
  render() {
    const { pokemons, randomizer } = this.props;
    return (
      <div className="container">
        <div className="columns">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon.name}
              image={pokemon.imageUrl}
            />
          ))}
        </div>
        <button className="button is-success" onClick={randomizer}>
          Random
        </button>
      </div>
    );
  }
}

export default PokemonContainer;
