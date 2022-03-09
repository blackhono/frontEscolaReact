import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false
  console.log(Component, isClosed, rest)
  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to={{ pathname: '/c', state: { prevPath: rest.location.pathname } }}
      />
    )
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} element={Component} />
}

MyRoute.defaultProps = {
  isClosed: false,
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
}
