import { app } from '../../store'

export const CounterModel = app.model('Counter', { total: 50 })

export const [mutations] = CounterModel.mutations({
  increase: () => (s) => ({ ...s, total: s.total + 1 }),
  decrease: () => (s) => ({ ...s, total: s.total - 1 }),
})
