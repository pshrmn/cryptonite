import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const protect = (Component) => {

  const ProtectedComponent = (props) => (
    props.authenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
  )

  return connect(
    state => ({
      authenticated: !!(state.user && state.user.authenticated)
    })
  )(ProtectedComponent)
}

export default protect
