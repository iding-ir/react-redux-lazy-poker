import {
  TOGGLE_AUTOPLAY,
  TURN_AUTOPLAY_ON,
  TURN_AUTOPLAY_OFF,
} from "../constants";

const INITIAL_STATE = false;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_AUTOPLAY:
      return !state;
    case TURN_AUTOPLAY_ON:
      return true;
    case TURN_AUTOPLAY_OFF:
      return false;
    default:
      return state;
  }
};

export default reducer;
