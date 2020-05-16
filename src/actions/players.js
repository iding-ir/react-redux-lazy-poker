import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  CHANGE_NAME,
  CHECK_NAME,
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
