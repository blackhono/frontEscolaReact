import { combineReducers } from 'redux'

import { reducerClickButton } from './example/reducer'
import { loginReducer } from './user/reducer'

export default combineReducers({
  reduceClickTest: reducerClickButton,
  user: loginReducer,
})
