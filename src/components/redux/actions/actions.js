import * as actions from "./types";

// export const fetchPost = () => (dispatch) => {
//   fetch('https://iq-cities.herokuapp.com/city')
//     .then((res) => res.json())
//     .then((post) =>
//       dispatch({
//         type: FETCH_POST,
//         payload: post,
//       })
//     )
//     .catch((err) => console.log(err));
// };

export const increment = () => {
  return {
    type: actions.INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: actions.DECREMENT,
  };
};
export const loggedin = () => {
  return {
    type: actions.LOG_IN,
  };
};
export const isDark = () => {
  return {
    type: actions.IS_DARK,
  };
};
