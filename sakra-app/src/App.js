import React from "react";
import YugiAll from "./components/YugiAll";
import Navbar from "./components/Navbar";
// import CardDetail from "./components/YugiDetails";
import Pagination from "./components/Pagination";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=50"
  );

  return (
    <div className="App background">
      <Navbar />

      {<YugiAll cards={data} />}
      {loading && <p className="has-text-white">Loading...</p>}
      {error && <p className="has-text-white">{error.message}</p>}

      {/* <CardDetail cards={data} /> */}

      <div className="container">
        <Pagination />
      </div>
    </div>
  );
}

export default App;
