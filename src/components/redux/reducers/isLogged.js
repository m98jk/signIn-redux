import * as actions from "../actions/types";
const isLogged = (state = false, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return !state;

    default:
      return state;
  }
};
export default isLogged;
