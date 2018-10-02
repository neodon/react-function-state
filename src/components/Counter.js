import React, { Component } from 'react';
import { increment, decrement, multiplyBy, codingAndAlgorithms } from '../math'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      aVal: 1,
    }
  }

  static defaultProps = {
    step: 1
  }

  handleIncrement = () => {
    this.setState(increment)
  }

  handleDecrement = () => {
    this.setState(decrement)
  }

  handleMultiplyByFive = () => {
    this.setState(multiplyBy(5));
  }

  handleCodingAndAlgorithms = (someval) => {
    this.setState(codingAndAlgorithms(someval));
  }

  render() {
    //<button onClick={this.handleIncrementThreeTimes}>+++</button>
    return (
      <div>
        <button onClick={this.handleMultiplyByFive}>x5</button>
        <button onClick={this.handleIncrement} step={5}>+5? (no, but why?)</button>
        <button onClick={this.handleIncrement}>+ {this.props.step}</button>
        <h1>{this.state.value}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleCodingAndAlgorithms.bind(this, this.state.value)}>Coding and Algorithms</button>
      </div>
    );
  }
}