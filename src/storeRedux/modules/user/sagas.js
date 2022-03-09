import { call, put, all, takeLatest, takeMaybe } from 'redux-saga/effects'
import * as userActions from './actions'
import * as types from '../types'

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

// aqui recebo o payload da action
function* exampleRequest() {
  try {
    yield call(requisicao)
    yield put(userActions.loginSuccess())
  } catch {
    yield put(userActions.loginFailure())
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, exampleRequest)])
