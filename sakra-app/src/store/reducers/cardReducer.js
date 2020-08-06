const initialState = {
  cards: [],
  loading: false,
  error: null,
};

function card(state = initialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };

    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };

    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default card;
