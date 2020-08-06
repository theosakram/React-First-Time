import { combineReducers } from "redux";
import cards from "./cardReducer";
import favorites from "./favoriteReducer";

export default combineReducers({
  cards,
  favorites,
});
