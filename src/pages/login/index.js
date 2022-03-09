/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AuthContext } from '../../contexts/auth'
import * as exampleActions from '../../storeRedux/modules/example/actions'

import { Container } from '../../styles/GlobalStyles'
import { Title } from './styled'

export default function Login() {
  const { authenticated, login, user } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  const handleClickApertaAi = (e) => {
    e.preventDefault()
    dispatch(exampleActions.clickbutton())
  }

  const botaoClicado = useSelector((state) => state.botaoClicado)

  console.log(user)

  return (
    <Container>
      <Title>
        {/* <p>{String(authenticated)}</p> */}
        {/* <p>{user ? user.nome : ''}</p> */}
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='email'> Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <label htmlFor='password'> Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button type='submit'>Login</button>
        </form>
        <h1>
          Login
          <small> Bem-vindo!</small>
        </h1>
      </Title>
      <div>
        <a href='a'>Sou um link</a>
        <button type='button' onClick={handleClickApertaAi}>
          APERTA AI
        </button>
        <p>{botaoClicado ? 'verdadeiro' : 'falso'}</p>
      </div>
    </Container>
  )
}
