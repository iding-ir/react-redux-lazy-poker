import { combineReducers } from "redux";

import playersReducer from "./players";
import gameReducer from "./game";
import autoplayReducer from "./autoplay";
import cardsReducer from "./cards";
import logsReducer from "./logs";

const combinedReducers = combineReducers({
  players: playersReducer,
  game: gameReducer,
  autoplay: autoplayReducer,
  cards: cardsReducer,
  logs: logsReducer,
});

export default combinedReducers;
