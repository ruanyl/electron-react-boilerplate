import './app.global.css'

import React, { Fragment } from 'react'
import { app, history } from './store'

import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import { render } from 'react-dom'

const store = app.createStore()

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
)
