import { App } from 'reapex'
import { connectRouter } from 'connected-react-router'
import { createHashHistory } from 'history'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'

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

app.registerReducer('router', routerReducer as any)
