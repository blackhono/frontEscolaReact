import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { Router } from '@reach/router'

// import MyRoute from './MyRoute'
import Login from '../pages/login/index'
import Page404 from '../pages/page404/index'

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/' component={Login} element={<Login />} />
      <Route path='*' component={Login} element={<Page404 />} />
    </Routes>
  )
}

/* <Route path='/' element={<Login />} />
<MyRoute exact path='/a' element={<Login />} />
<MyRoute path='*' element={<Page404 />} /> */
