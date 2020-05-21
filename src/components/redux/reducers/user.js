import * as actions from '../actions/types';
const userInfo = (state = false, action) => {
  switch (action.type) {
    case actions.USER_INFO:
      return {
          ...!state ,
          payload = action.payload
      };

    default:
      return state;
  }
};
export default userInfo;
