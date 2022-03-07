import React from 'react'

import GlobalStyles from './styles/GlobalStyles'

import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes />
    </>
  )
}

export default App
