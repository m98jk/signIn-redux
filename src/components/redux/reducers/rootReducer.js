import { combineReducers } from "redux";
// import postReducer from './postReducer';
import counterReducer from "./postReducer";

import isLogged from "./isLogged";
import isDark from "./isDark";

const rootReducer = combineReducers({
  // posts: postReducer,
  logged: isLogged,
  dark: isDark,
  counter: counterReducer,
});

export default rootReducer;
