import React, { useEffect } from "react";
import YugiAll from "../components/YugiAll";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/actions/index";

function Monsters() {
  const { type } = useParams();
  const newType = `${type.split(" ").join("%20")}`;

  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);
  const { fetchData } = allActions;

  useEffect(() => {
    dispatch(
      fetchData(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${newType}%20Monster&num=50&offset=0`
      )
    );
  }, [type]);

  return (
    <>
      {<YugiAll cards={cards} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </>
  );
}

export default Monsters;
