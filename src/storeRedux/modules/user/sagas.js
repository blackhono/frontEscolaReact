import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as userActions from './actions'
import * as types from '../types'
import { api, createSession } from '../../../services/api'

const requisicao = (email, password) =>
  new Promise((resolve, reject) => {
    resolve(createSession(email, password))
  })

// aqui recebo o payload da action
function* exampleRequest({ payload }) {
  try {
    const response = yield call(requisicao, payload.email, payload.password)
    console.log(response)
    yield put(userActions.loginSuccess(response.data))
    yield put({ type: types.LOGIN_SUCCESS, payload: response.data })
  } catch (e) {
    console.log(e)
    yield put(userActions.loginFailure())
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, exampleRequest)])
