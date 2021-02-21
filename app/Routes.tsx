import enUS from 'antd/lib/locale/en_US'
/* eslint react/jsx-props-no-spreading: off */
import React from 'react'
import { ConfigProvider, Modal } from 'antd'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/HomePage'
import { modal } from './store'

export const routes = {
  HOME: '/',
}

export default function Routes() {
  const modals = useSelector(modal.selectors.modals)

  return (
    <ConfigProvider locale={enUS}>
      <div>
        {modals.map((m) => (
          <Modal
            key={m.name}
            visible={m.show}
            title={m.props?.title}
            closable={false}
            onOk={m.props?.onOk}
            onCancel={m.props?.onCancel}
            footer={null}
          >
            <m.component {...m.props} />
          </Modal>
        ))}
      </div>
      <Switch>
        <Route path={routes.HOME} component={Home} />
      </Switch>
    </ConfigProvider>
  )
}
