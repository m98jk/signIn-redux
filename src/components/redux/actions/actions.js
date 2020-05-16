import { FETCH_POST, NEW_POST } from './types';

export const fetchPost = () => (dispatch) => {
  fetch('https://iq-cities.herokuapp.com/city')
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: FETCH_POST,
        payload: post,
      })
    )
    .catch((err) => console.log(err));
};
