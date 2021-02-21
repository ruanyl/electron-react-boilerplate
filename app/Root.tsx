import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { Store } from 'redux'

import Routes from './Routes'

type Props = {
  store: Store
  history: History
}

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

export default hot(Root)
