import { FETCH_POST, NEW_POST } from '../actions/types';

const initialSate = {
  items: [],
  item: {},
};

export default function (state = initialSate, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
}
