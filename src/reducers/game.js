import { MOVE_STAGE, SET_STAGE, START_GAME, END_GAME } from "../constants";
import { STAGES } from "../constants/game";

const INITIAL_STATE = {
  stage: STAGES[0],
  started: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_STAGE:
      const index = STAGES.indexOf(state.stage);
      const nextIndex = index + 1 >= STAGES.length ? 0 : index + 1;

      return { ...state, stage: STAGES[nextIndex] };
    case SET_STAGE:
      return { ...state, stage: action.payload };
    case START_GAME:
      return { ...state, started: true };
    case END_GAME:
      return { ...state, started: false };
    default:
      return state;
  }
};

export default reducer;
