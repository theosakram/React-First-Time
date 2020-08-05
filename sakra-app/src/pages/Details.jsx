import React from "react";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import YugiDetails from "../components/YugiDetails";
import { useParams } from "react-router-dom";

function Details() {
  let { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
  );

  return (
    <div className="container">
      <YugiDetails cards={data} />
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </div>
  );
}

export default Details;
