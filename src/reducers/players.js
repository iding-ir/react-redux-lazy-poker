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
    case ADD_PLAYER: {
      const id = Math.ceil(Math.random() * 9999999);

      return {
        ...state,
        [id]: {
          name: "Player",
          id,
          points: 0,
        },
      };
    }
    case REMOVE_PLAYER:
      return _.omit(state, action.payload);
    case REMOVE_PLAYERS:
      return {};
    case CHANGE_NAME: {
      const { id, name } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          name: name,
        },
      };
    }
    case CHECK_NAME: {
      const { id, name } = action.payload;
      const random = Math.floor(Math.random() * RANDOM_PLAYER_NAMES.length);

      return {
        ...state,
        [id]: {
          ...state[id],
          name: name || RANDOM_PLAYER_NAMES[random],
        },
      };
    }
    case GIVE_POINTS: {
      const { id, points } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          points: state[id].points + points,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
