import React from "react";

function YugiCards({ card, image }) {
  return (
    <div className="column is-one-fifth card-hover">
      <div className="card hoper">
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={card} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default YugiCards;
