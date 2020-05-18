import {
  TOGGLE_AUTOPLAY,
  TURN_AUTOPLAY_ON,
  TURN_AUTOPLAY_OFF,
} from "../constants";

export const toggleAutoplay = () => {
  return {
    type: TOGGLE_AUTOPLAY,
  };
};

export const turnAutoplayOn = () => {
  return {
    type: TURN_AUTOPLAY_ON,
  };
};

export const turnAutoplayOff = () => {
  return {
    type: TURN_AUTOPLAY_OFF,
  };
};
