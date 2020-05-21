import { combineReducers } from 'redux';
// import postReducer from './postReducer';
import counterReducer from './postReducer';

import isLogged from './isLogged';
import isDark from './isDark';
import userInfo from './user';
const rootReducer = combineReducers({
  // posts: postReducer,
  logged: isLogged,
  dark: isDark,
  user: userInfo,
  counter: counterReducer,
});

export default rootReducer;
