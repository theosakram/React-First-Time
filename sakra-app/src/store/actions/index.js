const addFavorite = (url) => {
  return { type: "ADD_FAVORITE", payload: url };
};

export default addFavorite;
