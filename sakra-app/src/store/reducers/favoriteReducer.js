const initialState = {
  favorites: [],
  loading: false,
  error: null,
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };

    default:
      return state;
  }
}

export default favorite;
