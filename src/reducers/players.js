import _ from "lodash";

import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  REMOVE_PLAYERS,
  CHANGE_NAME,
  CHECK_NAME,
  GIVE_POINTS,
} from "../constants";
import { RANDOM_PLAYER_NAMES } from "../configs";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      const id = Math.ceil(Math.random() * 9999999);

      return {
        ...state,
        [id]: {
          name: "Player",
          id: id,
          points: 0,
        },
      };

    case REMOVE_PLAYER:
      return _.omit(state, action.payload);
    case REMOVE_PLAYERS:
      return {};
    case CHANGE_NAME:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          name: action.payload.name,
        },
      };
    case CHECK_NAME:
      const random = Math.floor(Math.random() * RANDOM_PLAYER_NAMES.length);

      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          name: action.payload.name || RANDOM_PLAYER_NAMES[random],
        },
      };
    case GIVE_POINTS:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          points: state[action.payload.id].points + action.payload.points,
        },
      };
    default:
      return state;
  }
};

export default reducer;
