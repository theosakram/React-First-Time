import React, { useEffect } from "react";
import Loader from "../components/Loader";
import YugiAll from "../components/YugiAll";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/actions/index";

function Spells() {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);
  const { fetchData } = allActions;

  useEffect(() => {
    dispatch(
      fetchData(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card&num=50&offset=0`
      )
    );
  }, []);

  return (
    <>
      {<YugiAll cards={cards} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </>
  );
}

export default Spells;
