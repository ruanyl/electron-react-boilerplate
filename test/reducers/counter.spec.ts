import { CounterModel, counterMutations } from '../../app/features/counter/Counter.model'
import { app } from '../../app/store'

function setup(initialState = { counter: { value: 1 } }) {
  const store = app.createStore(initialState)
  return {
    store,
  }
}

describe('reducers', () => {
  describe('counter', () => {
    it('should handle counterMutations.increment', () => {
      const { store } = setup()
      store.dispatch(counterMutations.increment())
      expect(CounterModel.selectors.self(store.getState())).toMatchSnapshot()
    })

    it('should handle DECREMENT_COUNTER', () => {
      const { store } = setup()
      store.dispatch(counterMutations.decrement())
      expect(CounterModel.selectors.self(store.getState())).toMatchSnapshot()
    })
  })
})
