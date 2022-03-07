import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Router } from '@reach/router'
import history from '../services/history'

import Login from '../pages/login/index'
import Page404 from '../pages/page404/index'

export default function RoutesIndex() {
  return (
    <Router history={history}>
      <Login path='/' />
      <Page404 path='*' />
    </Router>
  )
}
