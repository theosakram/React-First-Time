import React from "react";

function ProgressOnDetail({ percentage }) {
  return (
    <>
      <progress
        className={`progress is-small ${
          percentage >= 75
            ? "is-danger"
            : percentage >= 50
            ? "is-warning"
            : percentage >= 25
            ? "is-primary"
            : "is-info"
        }`}
        value={percentage}
        max="100"
      ></progress>
    </>
  );
}

export default ProgressOnDetail;
