import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [loginState, setLoginState] = useState({
    
      username: '',
      password: ''
    
  })

  const handleChange = e =>{
    setLoginState({
      
        ...loginState,
        [e.target.name]: e.target.value
      
    })
  }

  const login = e =>{
    console.log(loginState)
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', loginState)
      .then(res =>{
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        history.push('./protected')
      })
      .catch(err =>{
        console.log(err.message)
      })

  }

  return (
    <div>
      <form onSubmit={login}>
        <input 
          type='text'
          name='username'
          value={loginState.username}
          onChange={handleChange}
        />
        <input
          type='text'
          name='password'
          value={loginState.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
