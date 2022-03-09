import * as types from '../types'
// estados iniciais
const initialState = {
  user: null,
  token: '',
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('estou fazendo a requisição (Saga redux)')
      return state
    }
    case types.LOGIN_SUCCESS: {
      console.log('foi um sucessão! =) (Saga redux)')
      return state
    }
    case types.LOGIN_FAILURE: {
      console.log('falhei em agir =( (Saga redux)')
      return state
    }

    default: {
      return state
    }
  }
}
