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

export { increment, decrement, multiplyBy, codingAndAlgorithms }