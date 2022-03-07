import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import history from './services/history'

import GlobalStyles from './styles/GlobalStyles'

import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes />
    </Router>
  )
}

export default App
