import { CounterModel, counterEffects, counterMutations } from './Counter.model'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import React from 'react'
import routes from '../../constants/routes.json'
import styles from './Counter.css'

export default function Counter() {
  const dispatch = useDispatch()
  const value = useSelector(CounterModel.selectors.value)
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {value}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(counterMutations.increment())
          }}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(counterMutations.decrement())
          }}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(counterEffects.incrementIfOdd())
          }}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(counterEffects.incrementAsync())
          }}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  )
}
