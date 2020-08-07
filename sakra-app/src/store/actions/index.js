const addFavorite = (url) => {
  return { type: "ADD_FAVORITE", payload: url };
};

const setCards = (data) => {
  return { type: "SET_CARDS", payload: data };
};

const setLoadingTrue = () => {
  return { type: "SET_LOADING_TRUE" };
};

const setLoadingFalse = () => {
  return { type: "SET_LOADING_FALSE" };
};

const setError = (message) => {
  return { type: "SET_LOADING_FALSE", payload: message };
};

const fetchData = (url) => {
  return (dispatch) => {
    async function fetchCard() {
      dispatch(setLoadingTrue());
      dispatch(setCards([]));
      try {
        dispatch(setCards(await (await (await fetch(url)).json()).data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoadingFalse());
      }
    }
    fetchCard();
  };
};

export default { addFavorite, setCards, fetchData };
