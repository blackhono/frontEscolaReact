import { createStore } from 'redux'

import combineReducers from './modules/rootReducers'

const store = createStore(combineReducers)
export default store

/*  exemplo
const reducer = (state, action) => {
  console.log(action)
  return state

} */
