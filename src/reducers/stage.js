import { MOVE_STAGE } from "../constants";
import { STAGES } from "../constants/game";

const INITIAL_STATE = STAGES[0];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_STAGE:
      const index = STAGES.indexOf(state);
      const nextIndex = index + 1 >= STAGES.length ? 0 : index + 1;

      return STAGES[nextIndex];
    default:
      return state;
  }
};

export default reducer;
