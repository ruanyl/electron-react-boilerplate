import React from 'react'
import { Button, Progress } from 'antd'
import { useSelector } from 'react-redux'

import { CounterModel, mutations } from './Counter.model'

export const Counter = () => {
  const total = useSelector(CounterModel.selectors.total)

  return (
    <>
      <Button type="primary" onClick={mutations.decrease}>
        -
      </Button>
      <Progress type="circle" percent={total} />
      <Button type="primary" onClick={mutations.increase}>
        +
      </Button>
    </>
  )
}
