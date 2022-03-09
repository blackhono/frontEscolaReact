import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://escola.diegolepamar.com.br',
})

export const createSession = async (email, password) => {
  const body = { email, password }
  try {
    const retorno = await api.post('/tokens', body)
    if (!retorno) {
      return
    }
    return retorno
  } catch (e) {
    console.log(e)
  }
}
