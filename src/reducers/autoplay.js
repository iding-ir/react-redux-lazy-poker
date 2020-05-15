import { TOGGLE_AUTOPLAY } from "../constants";

const INITIAL_STATE = false;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_AUTOPLAY:
      return !state;
    default:
      return state;
  }
};

export default reducer;
