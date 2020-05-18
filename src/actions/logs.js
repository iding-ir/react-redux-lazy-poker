import { ADD_LOG, RESET_LOGS } from "../constants";

export const addLog = (log) => {
  return {
    type: ADD_LOG,
    payload: log,
  };
};

export const resetLogs = () => {
  return {
    type: RESET_LOGS,
  };
};
