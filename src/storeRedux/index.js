import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './modules/rootReducers'
import rootSaga from './modules/rootSagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store

/*  exemplo
const reducer = (state, action) => {
  console.log(action)
  return state

} */
