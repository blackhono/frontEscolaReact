import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import history from './services/history'

import GlobalStyles from './styles/GlobalStyles'

import { AuthProvider } from './contexts/auth'
import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer
          autoClose={3000}
          className='toast-container'
          theme='dark'
        />
      </AuthProvider>
    </Router>
  )
}

export default App
