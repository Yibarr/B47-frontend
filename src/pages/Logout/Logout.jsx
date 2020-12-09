import React, { useContext, useEffect } from 'react'
import {
  Redirect
} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'

const Logout = () => {
  const { logOut } = useContext(AuthContext)

  useEffect(() => {
    logOut()
  })

  return (
    <Redirect to="/login" />
  )

}

export default Logout