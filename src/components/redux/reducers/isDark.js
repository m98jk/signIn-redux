import * as actions from "../actions/types";
const isDark = (state = false, action) => {
  switch (action.type) {
    case actions.IS_DARK:
      return !state;

    default:
      return state;
  }
};
export default isDark;
