import { combineReducers } from "redux";

import playersReducer from "./players";
import stageReducer from "./stage";
import dealsReducer from "./deals";

const combinedReducers = combineReducers({
  players: playersReducer,
  stage: stageReducer,
  deals: dealsReducer,
});

export default combinedReducers;
