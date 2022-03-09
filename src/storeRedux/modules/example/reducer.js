// estados iniciais
const initialState = {
  botaoClicado: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state }
      newState.botaoClicado = !newState.botaoClicado
      return newState
    }

    default: {
      return state
    }
  }
}
