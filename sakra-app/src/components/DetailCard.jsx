import React from "react";
import Progress from "./ProgressOnDetail";

function DetailCard({ id, card, atk, def, price, type, desc, level }) {
  const atkPercentage = atk / 50;
  const defPercentage = def / 50;
  return (
    <div>
      <div className="column">
        <div className="notification">
          <h1 className="title has-text-left">
            {" "}
            {card}{" "}
            <span style={{ float: "right" }}>
              <i className="fas fa-star"></i> {level}
            </span>{" "}
          </h1>
          <h1 className="has-text-weight-semibold has-text-left subtitle">
            {type}/ ID: {id}
          </h1>

          <p className="has-text-justified" style={{ marginBottom: "15px" }}>
            {desc}
          </p>

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
