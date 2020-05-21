import * as actions from '../actions/types';
const initailState = [];
const userInfo = (state = initailState, action) => {
  switch (action.type) {
    case actions.USER_INFO:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};
export default userInfo;
