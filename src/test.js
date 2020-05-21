import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from './components/redux/actions/types';

export class Test extends Component {
  handleIncrementClick = () => {
    const { increment } = this.props;
    increment();
  };
  render() {
    const { counter } = this.props;
    return (
      <div>
        Counter: {counter}
        <button onClick={this.handleIncrementClick}>++</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const connectAll = connect(mapStateToProps, actions)(Test);
export default connectAll;
