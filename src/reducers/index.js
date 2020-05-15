import { combineReducers } from "redux";

import playersReducer from "./players";
import stageReducer from "./stage";
import autoplayReducer from "./autoplay";
import cardsReducer from "./cards";

const combinedReducers = combineReducers({
  players: playersReducer,
  stage: stageReducer,
  autoplay: autoplayReducer,
  cards: cardsReducer,
});

export default combinedReducers;
