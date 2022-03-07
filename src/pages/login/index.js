import React from 'react'

import { Container } from '../../styles/GlobalStyles'
import { Title } from './styled'

export default function Login() {
  return (
    <Container>
      <Title>
        <h1>
          Login
          <small> Bem-vindo!</small>
        </h1>
      </Title>
      <div>
        <a href='a'>Sou um link</a>
        <button type='button'>APERTA AI</button>
      </div>
    </Container>
  )
}
