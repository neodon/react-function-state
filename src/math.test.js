import { increment, decrement, multiplyBy, codingAndAlgorithms } from './math'

describe('math', () => {
  it('multiplyBy returns a function that returns new state with value multiplied by argument', () => {
    expect(multiplyBy(5)({ value: 2 })).toMatchObject({ value: 10 })
    expect(multiplyBy(10)({ value: 17 })).toMatchObject({ value: 170 })
  })
})
