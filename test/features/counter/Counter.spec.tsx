import * as renderer from 'react-test-renderer'
import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Counter from '../../../app/features/counter/Counter'
import { counterEffects, counterMutations } from '../../../app/features/counter/Counter.model'
import { app } from '../../../app/store'

jest.useFakeTimers()

function setup(initialState = { counter: { value: 1 } }) {
  const store = app.createStore(initialState)

  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <Router>
          <Counter />
        </Router>
      </Provider>
    )
  const component = getWrapper()
  return {
    store,
    component,
    buttons: component.find('button'),
    p: component.find('.counter'),
  }
}

describe('Counter component', () => {
  it('should should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^1$/)
  })

  it('should first button should call increment', () => {
    const { buttons } = setup()
    const incrementSpy = jest.spyOn(counterMutations, 'increment')

    buttons.at(0).simulate('click')
    expect(incrementSpy).toBeCalled()
    incrementSpy.mockRestore()
  })

  it('should match exact snapshot', () => {
    const { store } = setup()
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Counter />
          </Router>
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should second button should call decrement', () => {
    const { buttons } = setup()
    const decrementSyp = jest.spyOn(counterMutations, 'decrement')
    buttons.at(1).simulate('click')
    expect(decrementSyp).toBeCalled()
    decrementSyp.mockRestore()
  })

  it('should third button should call incrementIfOdd', () => {
    const { buttons } = setup()
    const incrementIfOdd = jest.spyOn(counterEffects, 'incrementIfOdd')
    buttons.at(2).simulate('click')
    expect(incrementIfOdd).toBeCalled()
    incrementIfOdd.mockRestore()
  })

  it('should fourth button should call incrementAsync', () => {
    const { buttons } = setup()
    const incrementAsync = jest.spyOn(counterEffects, 'incrementAsync')
    buttons.at(3).simulate('click')
    expect(incrementAsync).toBeCalled()
    incrementAsync.mockRestore()
  })

  it('should display updated count after increment button click', () => {
    const { buttons, p } = setup()
    buttons.at(0).simulate('click')
    expect(p.text()).toMatch(/^2$/)
  })

  it('should display updated count after decrement button click', () => {
    const { buttons, p } = setup()
    buttons.at(1).simulate('click')
    expect(p.text()).toMatch(/^0$/)
  })

  it('shouldnt change if even and if odd button clicked', () => {
    const { buttons, p } = setup({ counter: { value: 2 } })
    buttons.at(2).simulate('click')
    expect(p.text()).toMatch(/^2$/)
  })

  it('should change if odd and if odd button clicked', () => {
    const { buttons, p } = setup({ counter: { value: 1 } })
    buttons.at(2).simulate('click')
    expect(p.text()).toMatch(/^2$/)
  })
})
