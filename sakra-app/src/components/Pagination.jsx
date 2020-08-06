import React from "react";

function Pagination() {
  return (
    <>
      <nav
        className="pagination"
        role="navigation"
        aria-label="pagination"
        style={{ marginTop: "50px", paddingBottom: "25px" }}
      >
        <a className="pagination-previous has-text-white">Previous</a>
        <a className="pagination-next has-text-white">Next page</a>
        <ul className="pagination-list">
          <li>
            <a
              className="pagination-link has-text-white"
              aria-label="Goto page 1"
            >
              1
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
