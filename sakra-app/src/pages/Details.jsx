import React, { useEffect } from "react";
import Loader from "../components/Loader";
import YugiDetails from "../components/YugiDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/actions/index";

function Details() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);
  const { fetchData } = allActions;

  useEffect(() => {
    dispatch(
      fetchData(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
    );
  }, []);

  return (
    <div className="container">
      <YugiDetails cards={cards} />
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </div>
  );
}

export default Details;
