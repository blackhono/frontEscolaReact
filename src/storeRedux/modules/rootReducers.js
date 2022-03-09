import { combineReducers } from 'redux'

import { reducerClickButton } from './example/reducer'

export default combineReducers({
  reduceClickTest: reducerClickButton,
})
