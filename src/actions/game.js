import { MOVE_STAGE, SET_STAGE, START_GAME, END_GAME } from "../constants";

export const moveStage = () => {
  return {
    type: MOVE_STAGE,
  };
};

export const setStage = (stage) => {
  return {
    type: SET_STAGE,
    payload: stage,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const endGame = () => {
  return {
    type: END_GAME,
  };
};
