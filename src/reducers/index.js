import { combineReducers } from "redux";

import playersReducer from "./players";

const combinedReducers = combineReducers({
  players: playersReducer,
});

export default combinedReducers;
