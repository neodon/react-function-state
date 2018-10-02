import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'

describe('Counter', () => {
  let div, counter

  beforeEach(() => {
    div = document.createElement('div');
    counter = ReactDOM.render(<Counter />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  it('test', () => {
    expect(true).toBe(true)
  })
})
