import React, { useContext } from "react";
import { context } from "../App";
import { BrowserRouter as Router, Link } from "react-router-dom";

function FavoriteButton() {
  const { theme, useTheme } = useContext(context);
  return (
    <Link
      to="/favorites"
      className={`navbar-item ${theme === "dark" ? "has-text-white" : ""}`}
    >
      <i className="fas fa-heart" style={{ marginRight: "5px" }}></i> Favorites
    </Link>
  );
}

export default FavoriteButton;
