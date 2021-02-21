import React, { Fragment } from 'react'
import { initializeIcons } from '@uifabric/icons'
import { render } from 'react-dom'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'

import './app.global.css'
import Root from './Root'
import { app, history } from './store'

initializeIcons()

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
