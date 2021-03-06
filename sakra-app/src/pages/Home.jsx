import React, { useEffect } from "react";
import YugiAll from "../components/YugiAll";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../store/actions/index";

function Home() {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);
  const { fetchData } = allActions;

  useEffect(() => {
    dispatch(
      fetchData(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0`
      )
    );
  }, []);

  return (
    <div data-testid="home">
      {<YugiAll cards={cards} />}
      {loading && <Loader />}
      {error && <p className="has-text-white">{error.message}</p>}
    </div>
  );
}

export default Home;
