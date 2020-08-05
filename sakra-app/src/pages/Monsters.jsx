import React from "react";
import useFetch from "../hooks/useFetch";
import YugiAll from "../components/YugiAll";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

function Monsters() {
  const { type } = useParams();
  const newType = `${type.split(" ").join("%20")}`;
  const { data, loading, error } = useFetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${newType}%20Monster&num=50&offset=0`,
    type
  );

  return (
    <>
      {<YugiAll cards={data} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </>
  );
}

export default Monsters;
