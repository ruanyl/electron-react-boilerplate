import { call, delay, put, select } from 'redux-saga/effects'

import { app } from '../../store'

export const CounterModel = app.model('counter', { value: 0 })

export const [counterMutations] = CounterModel.mutations({
  increment: () => (state) => ({ ...state, value: state.value + 1 }),
  decrement: () => (state) => ({ ...state, value: state.value - 1 }),
})

export const [counterEffects] = CounterModel.effects(
  {
    increment: {
      *takeEvery() {
        yield call(console.log, 'increment')
      },
    },
    decrement: {
      *takeEvery() {
        yield call(console.log, 'decrement')
      },
    },
  },
  {
    incrementIfOdd: {
      *takeEvery() {
        const value: number = yield select(CounterModel.selectors.value)
        if (value % 2 !== 0) {
          yield put(counterMutations.increment())
        }
      },
    },
    incrementAsync: {
      *takeLatest(ms = 1000) {
        yield delay(ms)
        yield put(counterMutations.increment())
      },
    },
  }
)
