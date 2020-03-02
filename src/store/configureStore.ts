import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux'
import { MakeStore } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'

import rootReducer, { RootState, rootSaga } from './modules'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}

const configureStore: any = (initialState: RootState) => {
  const sagaMiddleware = createSagaMiddleware()

  const development = process.env.NODE_ENV === 'development'

  const middlewares = [sagaMiddleware]

  const enhancer: any = development
    ? compose(
        applyMiddleware(...middlewares),
        process.browser && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f: any) => f
      )
    : compose(applyMiddleware(...middlewares))

  const store: any = createStore(rootReducer, initialState, enhancer)

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
