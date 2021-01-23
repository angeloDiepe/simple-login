import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';

import './login.styles.css'
const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  const handleInput = (type, val) => {
    if(type==="email"){
      setEmail(val)
    }
    else if(type==="password"){
      setPassword(val)
    }
  }
  const submit = () => {
    if(password&&email){
      if (validateEmail(email)) {
        if (error) setError(false)
      } else {
        setError(true)
        return
      }
      alert(email+"+"+password)
    }
  }
  return (
    <div id="login-wrapper">
      <div id="login-container">
        <h3>Se connecter</h3>
        <TextField
          error={error}
          id="email"
          label="Email"
          value={email}
          type="email"
          helperText={error?"Incorrect":null}
          onChange={(e)=>handleInput('email', e.target.value)}
          />
        <TextField
          id="password"
          label="Mot de passe"
          value={password}
          type="password"
          onChange={(e)=>handleInput('password', e.target.value)}
        />
        <Button variant="contained" id="login-button" color="primary" onClick={submit}>
          Se connecter
        </Button>
      </div>
    </div>
  )
}

export default Login
