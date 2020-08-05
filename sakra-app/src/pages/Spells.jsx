import React from "react";
import Loader from "../components/Loader";
import YugiAll from "../components/YugiAll";
import useFetch from "../hooks/useFetch";

function Spells() {
  const { data, loading, error } = useFetch(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card&num=50&offset=0"
  );
  return (
    <>
      {<YugiAll cards={data} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </>
  );
}

export default Spells;
