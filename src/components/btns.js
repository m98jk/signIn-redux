import React, { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement, loggedin } from './redux/actions/types';

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
          LOG IN
        </button>
        {islogged ? <h1>Welcome home</h1> : <h2>Please Log in</h2>}
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// export default connect(
//   mapStateToProps
//   // mapDispatchToProps()
// )(Btn);
