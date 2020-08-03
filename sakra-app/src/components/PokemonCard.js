import React, { Component } from "react";

export class PokemonCard extends Component {
  render() {
    return (
      <div className="column is-one-fifth">
        <div className="card hoper">
          <div className="card-image">
            <figure className="image">
              <img src={this.props.image} alt={this.props.pokemon} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{this.props.pokemon}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
