import React from "react";
import Progress from "./ProgressOnDetail";

function DetailCard({ card, atk, def, price, type }) {
  const atkPercentage = atk / 30;
  const defPercentage = def / 30;
  return (
    <div>
      <div className="column">
        <div className="notification">
          <h1 className="title"> {card} </h1>
          <h1 className="has-text-weight-semibold subtitle">{type}</h1>

          <h1 className="has-text-weight-semibold subtitle">$ {price}</h1>

          <h2 style={{ marginTop: "25px" }}>ATK:</h2>
          <Progress percentage={atkPercentage} />

          <h2 style={{ marginTop: "25px" }}>DEF:</h2>
          <Progress percentage={defPercentage}></Progress>

          <div className="buttons is-centered" style={{ marginTop: "25px" }}>
            <button className="button button-color">Wishlist</button>
            <button className="button button-color">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
