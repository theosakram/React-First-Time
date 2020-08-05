import React from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
// import useFetch from "../hooks/useFetch";

function SearchBar() {
  // const {data, loading, error} = useFetch()
  return (
    <div className="container">
      <div
        className="field is-small"
        style={{ marginTop: "25px", width: "300px" }}
      >
        <div className="control">
          <input
            className="input is-info"
            type="text"
            placeholder="Search By Name"
            // value={fname}
            // onChange={changeFname}
            // onSubmit={getCards}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
