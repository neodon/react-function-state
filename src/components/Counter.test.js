import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Counter from './Counter'

const initialCounterValue = 0

describe('Counter', () => {
  let div, counter

  beforeEach(() => {
    div = document.createElement('div');
    counter = ReactDOM.render(<Counter />, div);
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders value from state', () => {
    expect(div.querySelector('h1').textContent).toBe(initialCounterValue.toString())
    counter.setState({ value: 42 })
    expect(div.querySelector('h1').textContent).toBe("42")
  })

  it('handleMultiplyByFive multiplies the value by 5', () => {
    counter.setState({ value: 42 })
    ReactTestUtils.Simulate.click(div.querySelectorAll('button')[0])
    expect(div.querySelector('h1').textContent).toBe((42 * 5).toString())
    ReactTestUtils.Simulate.click(div.querySelectorAll('button')[0])
    expect(div.querySelector('h1').textContent).toBe((42 * 5 * 5).toString())
  })
})
