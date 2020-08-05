const initialState = {
  favorites: [],
};

function reducer(state = initialState, action) {
  if (action.type === "ADD_FAVORITE") {
    return {
      ...state,
      favorites: state.favorites.concat(action.payload),
    };
  }
  return state;
}

export default reducer;
