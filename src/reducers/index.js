import { combineReducers } from "redux";

import playersReducer from "./players";
import stageReducer from "./stage";
import autoplayReducer from "./autoplay";
import dealsReducer from "./deals";

const combinedReducers = combineReducers({
  players: playersReducer,
  stage: stageReducer,
  autoplay: autoplayReducer,
  deals: dealsReducer,
});

export default combinedReducers;
