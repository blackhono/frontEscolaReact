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
      const newState = { ...state }
      console.log('foi um sucessão! =) (Saga redux)', newState)
      return newState
    }
    case types.LOGIN_FAILURE: {
      console.log('falhei em agir =( (Saga redux)', state)
      return state
    }

    default: {
      return state
    }
  }
}
