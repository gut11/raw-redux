import { Action } from "redux";

const counterDefaultValue = 0

const counterReducer = (state = counterDefaultValue, action: Action): number => {
  if (action.type === "SUBTRACT") return state - 1;
  if (action.type === "ADD") return state + 1;
  if (action.type === "RESET") return 0;
  return state;
};

export default counterReducer
