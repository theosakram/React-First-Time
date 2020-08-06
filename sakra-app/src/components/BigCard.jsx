import React from "react";

function BigCard({ card, image }) {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img className="garmin" src={image} alt={card} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
