import * as types from '../types'

export function loginRequest(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  }
}

export function loginSuccess({ user, token }) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  }
}

export function loginFailure(user, token) {
  return {
    type: types.LOGIN_FAILURE,
  }
}
