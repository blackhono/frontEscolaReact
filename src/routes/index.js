/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useContext, Children } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from '../pages/login'
import Page404 from '../pages/page404'

import { AuthProvider, AuthContext } from '../contexts/auth'

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      return <div className='loading'>Carregando...</div>
    }

    // não autenticado
    if (!authenticated) {
      return <Navigate to='/login' />
    }
    // autenticado recebe o children que tem os components e props
    return children
  }

  return (
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route
        path='*'
        element={
          <Private>
            <Page404 />
          </Private>
        }
      />
    </Routes>
  )
}

export default AppRoutes

/* import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MyRoute from './MyRoute'
import Login from '../pages/login'
import Page404 from '../pages/page404'

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='error' element={Page404} />
      <Route path='*' element={MyRoute} />
    </Routes>
  )
}
 */
