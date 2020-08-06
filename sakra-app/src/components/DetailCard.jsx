import React, { useState } from "react";
import Progress from "./ProgressOnDetail";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import addFavorite from "../store/actions";

function DetailCard({ id, card, atk, def, price, type, desc, level, image }) {
  const atkPercentage = atk / 50;
  const defPercentage = def / 50;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleFavorite = (value) => {
    Swal.fire({
      icon: "success",
      title: "Yes",
      text: "Card added to favorites",
    });
    dispatch(addFavorite(value));
  };

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

          {!favorites.includes(image) ? (
            <div className="buttons is-centered" style={{ marginTop: "25px" }}>
              <button
                onClick={() => handleFavorite(image)}
                className="button button-color"
              >
                Wishlist
              </button>
            </div>
          ) : (
            <div className="is-centered" style={{ marginTop: "25px" }}>
              <h1>Card has already been wished</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
