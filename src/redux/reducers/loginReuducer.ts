import { Action } from "redux";

const loginDefaultValue = false;

const loginReducer = (state = loginDefaultValue, action: Action): boolean => {
  if (action.type === "LOGIN") return true;
  if (action.type === "LOGOFF") return false;
  return state;
};

export default loginReducer
