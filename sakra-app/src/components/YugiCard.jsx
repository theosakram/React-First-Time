import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function YugiCard({ card, id, image }) {
  return (
    <div className="column is-one-fifth card-hover">
      <div className="card hoper">
        <div className="card-image">
          <Link to={`/details/${id}`} className="image">
            <img src={image} alt={card} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YugiCard;
