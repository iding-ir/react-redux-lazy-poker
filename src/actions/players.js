import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  REMOVE_PLAYERS,
  CHANGE_NAME,
  CHECK_NAME,
  GIVE_POINTS,
} from "../constants";

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

export const removePlayers = () => {
  return {
    type: REMOVE_PLAYERS,
  };
};

export const changeName = (id, name) => {
  return {
    type: CHANGE_NAME,
    payload: { id, name },
  };
};

export const checkName = (id, name) => {
  return {
    type: CHECK_NAME,
    payload: { id, name },
  };
};

export const givePoints = (id, points) => {
  return {
    type: GIVE_POINTS,
    payload: { id, points },
  };
};
