import { all } from 'redux-saga/effects'

import authUser from './user/sagas'

export default function* rootSaga() {
  return yield all([authUser])
}
