import * as actions from '../actions/types';

// const initialSate = {
//   items: [],
//   item: {},
// };

// export default function (state = initialSate, action) {
//   switch (action.type) {
//     case FETCH_POST:
//       return {
//         ...state,
//         items: action.payload,
//       };

//     default:
//       return state;
//   }
// }

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
