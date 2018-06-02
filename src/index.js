/* eslint no-underscore-dangle: 0, no-undef: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

// state
import { Provider } from 'react-redux'
import { DrizzleProvider } from 'drizzle-react'
import drizzleOptions from 'drizzleOptions'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { drizzleReducers, generateContractsInitialState } from 'drizzle'
import reducers from 'state/reducers'

// routing
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'

import rootSaga from 'rootSaga'
import createSagaMiddleware from 'redux-saga'

import 'index.css'
import { injectGlobal } from 'emotion'
import { tags } from 'stylesheet/copy'
import App from 'App'
import registerServiceWorker from 'registerServiceWorker'

injectGlobal(tags)

const history = createHistory()
const router = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()

const contractsInitialState = {
  contracts: generateContractsInitialState(drizzleOptions),
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    ...reducers,
    ...drizzleReducers,
    router: routerReducer,
  }),
  contractsInitialState,
  composeEnhancers(applyMiddleware(promise(), thunk, router, sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

// render(
ReactDOM.render(
  <DrizzleProvider options={drizzleOptions}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </DrizzleProvider>,
  document.getElementById('app-root'),
)

registerServiceWorker()
