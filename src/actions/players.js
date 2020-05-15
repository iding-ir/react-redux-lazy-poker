import { ADD_PLAYER, REMOVE_PLAYER } from "../constants";

export const addPlayer = () => {
  return {
    type: ADD_PLAYER,
  };
};

export const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    payload: id,
  };
};
