import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'NOME-DA-APLICACAO',
      storage,
      whitelist: ['user'],
    },
    reducers
  )
  return persistedReducer
}
