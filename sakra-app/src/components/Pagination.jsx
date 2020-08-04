import React from "react";

function Pagination() {
  return (
    <>
      <nav
        className="pagination is-rounded"
        role="navigation"
        aria-label="pagination"
        style={{ marginTop: "50px" }}
      >
        <a className="pagination-previous has-text-white">Previous</a>
        <a className="pagination-next has-text-white">Next page</a>
        <ul className="pagination-list">
          <li>
            <a className="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 45">
              45
            </a>
          </li>
          <li>
            <a
              className="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
            >
              46
            </a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 47">
              47
            </a>
          </li>
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 86">
              86
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
