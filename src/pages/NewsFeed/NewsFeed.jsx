import React, { useContext } from 'react'
import {
  Redirect
} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'

const NewsFeed = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <React.Fragment>
      Hola que tal, este es tu newfeed
      { !isAuth && <Redirect to="/login" /> }
    </React.Fragment>
  )
}

export default NewsFeed
