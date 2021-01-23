import React, { useState } from 'react'
import { TextField, Button, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const Login = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)


  const MyButton = styled(Button)({
    marginTop:"35px"
  });
  const MyContainer = styled(Container)({
    width: "95%",
    height: "300px",
    maxWidth: "400px",
    boxShadow: "10px 10px 74px -32px rgba(36, 166, 136, 0.53)",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "30px 17px",
  });
  const MyWrapper = styled(Container)({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

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
    <MyWrapper>
      <MyContainer>
        <h3 style={{margin:"10px 0", textAlign:"center"}}>Se connecter</h3>
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
        <MyButton variant="contained" color="primary" onClick={submit}>
          Se connecter
        </MyButton>
      </MyContainer>
    </MyWrapper>
  )
}

export default Login
