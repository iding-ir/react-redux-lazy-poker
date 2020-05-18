import { ADD_LOG, CLEAR_LOGS } from "../constants";

export const addLog = (log) => {
  return {
    type: ADD_LOG,
    payload: log,
  };
};

export const clearLogs = () => {
  return {
    type: CLEAR_LOGS,
  };
};
