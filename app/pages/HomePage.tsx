import React from 'react'

import styles from './HomePage.css'
import { Counter } from '../modules/Counter/Counter.component'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div>
        <Counter />
      </div>
    </div>
  )
}
