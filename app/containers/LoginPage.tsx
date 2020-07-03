import React from 'react'

import styles from './pages.css'
import { LoginForm } from '../modules/Login/LoginForm'

export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.login}>
        <LoginForm />
      </div>
    </div>
  )
}
