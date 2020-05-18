import { ADD_LOG, RESET_LOGS } from "../constants";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LOG:
      return [...state, action.payload];
    case RESET_LOGS:
      return [];
    default:
      return state;
  }
};

export default reducer;
