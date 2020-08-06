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

function fetchData(url) {
  return (dispatch) => {
    dispatch(setLoadingTrue());
    dispatch(setCards([]));
    fetch(url)
      .then((data) => data.json())
      .then(({ data }) => {
        dispatch(setCards(data));
      })
      .catch((err) => {
        dispatch(setError(err.message));
      })
      .finally((data) => {
        dispatch(setLoadingFalse());
      });
  };
}

export default { addFavorite, setCards, fetchData };
