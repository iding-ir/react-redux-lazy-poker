import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  CHANGE_NAME,
  CHECK_NAME,
  GIVE_POINTS,
} from "../constants";
import { RANDOM_PLAYER_NAMES } from "../configs";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          name: "Player",
          id: Math.ceil(Math.random() * 9999999),
          points: 0,
        },
      ];

    case REMOVE_PLAYER:
      return state.filter((player) => player.id !== action.payload);
    case CHANGE_NAME:
      return state.map((player) => {
        if (player.id === action.payload.id) {
          player.name = action.payload.name;
        }

        return player;
      });
    case CHECK_NAME:
      return state.map((player) => {
        if (player.id === action.payload.id && action.payload.name === "") {
          const random = Math.floor(Math.random() * RANDOM_PLAYER_NAMES.length);

          player.name = RANDOM_PLAYER_NAMES[random];
        }

        return player;
      });
    case GIVE_POINTS:
      return state.map((player) => {
        if (player.id === action.payload.id) {
          player.points += action.payload.points;
        }

        return player;
      });
    default:
      return state;
  }
};

export default reducer;
