import { combineReducers } from 'redux';
// import postReducer from './postReducer';
import counterReducer from './postReducer';

import isLogged from './isLogged';

const rootReducer = combineReducers({
  // posts: postReducer,
  logged: isLogged,
  counter: counterReducer,
});

export default rootReducer;
