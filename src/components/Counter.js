import React, { Component } from 'react';

function increment(state, props) {
  console.log("state.value: " + state.value);
  console.log("props.step: " + props.step);
  return {
    value: state.value + props.step
  }
}

function decrement(state, props) {
  return {
    value: state.value - props.step
  }
}

function multiplyBy(multiplier) {
  return state => ({
    value: state.value * multiplier,
  });
}

function codingAndAlgorithms(somevar) {
  return state => {
    const example = somevar + state.aVal
    return ({
      aVal: somevar,
      value: Math.ceil(example + state.value)
    });
  }
}

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      aVal: 1,
    }
  }

  defaultProps = {
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