import { DEAL_PLAYERS, DEAL_FLOP, DEAL_TURN, DEAL_RIVER } from "../constants";
import getRandomCards from "../utils/getRandomCards";

const INITIAL_STATE = {
  players: [],
  table: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  const alreadyDealt = [...state.players, ...state.table];

  switch (action.type) {
    case DEAL_PLAYERS:
      return {
        ...state,
        players: [...state.players, ...getRandomCards(2, alreadyDealt)],
      };

    case DEAL_FLOP:
      return {
        ...state,
        table: [...state.table, ...getRandomCards(3, alreadyDealt)],
      };

    case DEAL_TURN:
      return {
        ...state,
        table: [...state.table, ...getRandomCards(1, alreadyDealt)],
      };

    case DEAL_RIVER:
      return {
        ...state,
        table: [...state.table, ...getRandomCards(1, alreadyDealt)],
      };
    default:
      return state;
  }
};

export default reducer;
