import modalModule from 'reapex-module-modal'
import immerPlugin from 'reapex-plugin-immer'
import { connectRouter } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import { App } from 'reapex'
import { createLogger } from 'redux-logger'

const excludeLoggerEnvs = ['test', 'production']
const shouldIncludeLogger = !excludeLoggerEnvs.includes(process.env.NODE_ENV || '')

export const history = createHashHistory()

const router = routerMiddleware(history)
const middlewares = [router]
if (shouldIncludeLogger) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  })
  middlewares.push(logger)
}

const routerReducer = connectRouter(history)

export const app = new App({ middlewares })
app.plugin(immerPlugin)

export const modal = app.use(modalModule, '@@modals')

app.registerReducer('router', routerReducer as any)
