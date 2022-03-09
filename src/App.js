import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
// import history from './services/history'

import GlobalStyles from './styles/GlobalStyles'

import { AuthProvider } from './contexts/auth'
import store from './storeRedux/index'
import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
