import React, { useContext } from "react";
import { context } from "../App";

function Loader() {
  const { theme } = useContext(context);
  return (
    <>
      <div className="spinner" style={{ margin: "auto" }}>
        <div
          className="cube1"
          style={{
            backgroundColor: `${theme === "light" ? "#37383F" : "#EEEEEE"}`,
          }}
        ></div>
        <div
          className="cube2"
          style={{
            backgroundColor: `${theme === "light" ? "#37383F" : "#EEEEEE"}`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Loader;
