import React, { useEffect } from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'


const LoginModel = () => {
  
  const token = localStorage.getItem('token')
  
  console.log(token)

  return (
    <div>
      {
        token ? <Home /> : <Login />
      }
    </div>
  )
}

export default LoginModel