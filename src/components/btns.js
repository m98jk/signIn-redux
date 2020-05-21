import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement, loggedin } from './redux/actions/actions';

export function Btn() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.logged);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter is : {counter}</h1>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="btn" onClick={() => dispatch(loggedin())}>
          {islogged ? 'LOG OUT' : 'LOG IN'}
        </button>
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
