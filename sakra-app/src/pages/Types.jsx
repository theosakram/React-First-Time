import React, { useEffect } from "react";
import YugiAll from "../components/YugiAll";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/actions/index";
import { useParams } from "react-router-dom";

function Types() {
  const { type } = useParams();
  const newType = type.substring(0, type.length - 1).toLowerCase();
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);

  const { fetchData } = allActions;

  useEffect(() => {
    dispatch(
      fetchData(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${newType}%20card&num=50&offset=0`
      )
    );
  }, [newType]);
  return (
    <>
      {<YugiAll cards={cards} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </>
  );
}

export default Types;
