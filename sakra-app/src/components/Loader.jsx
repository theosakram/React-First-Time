import React from "react";

function Loader() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="box">
                <h2 className="title is-2">This is a Loading Box</h2>
                <div className="has-text-centered">
                  <a className="button is-big">Call Loader</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
