import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import {
  increment,
  decrement,
  loggedin,
  userInfo,
} from '../../redux/actions/actions';
export default function Btn({ style }) {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.logged);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter is : {counter}</h1>
      <div>
        <button
          className="btn bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded "
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="btn bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded "
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className={
            'bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded ' + style.text
          }
          onClick={() => dispatch(loggedin())}
        >
          {islogged ? 'LOG OUT' : 'LOG IN'}
        </button>
        <h1>User Name is {user.payload}</h1>
        <button className="trans">TRANSITION ANIMATION EFFECT</button>
        <div></div>
        <button class="btnx btnx-blue">Button</button>
      </div>
    </div>
  );
}

// // const mapStateToProps = (state) => ({
// //   counter: state.counter,
// // });

// // export default connect(
// //   mapStateToProps
// //   // mapDispatchToProps()
// // )(Btn);
