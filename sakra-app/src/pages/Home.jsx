import React from "react";
import useFetch from "../hooks/useFetch";
import YugiAll from "../components/YugiAll";
import Loader from "../components/Loader";

function Home() {
  const { data, loading, error } = useFetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0`
  );
  return (
    <>
      {<YugiAll cards={data} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </>
  );
}

export default Home;
