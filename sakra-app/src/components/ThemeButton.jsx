import React, { useContext } from "react";
import { context } from "../App";

function ThemeButton({ color }) {
  const { changeTheme, theme } = useContext(context);
  return (
    <a
      onClick={() => changeTheme(color)}
      className={`navbar-item ${theme === "dark" ? "has-text-white" : ""}`}
    >
      <i className="fas fa-adjust" style={{ marginRight: "5px" }}></i>
    </a>
  );
}

export default ThemeButton;
