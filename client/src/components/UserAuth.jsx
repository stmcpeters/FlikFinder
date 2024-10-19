// login() => will handle fetching user data from DB and set user state as logged in
// register() => will handle creating new user in DB and set user state as logged in

import React, { useState } from 'react'

export default function UserAuth() {
  // setting initial state of login data and state to update inputs
  const [loginData, setLoginData] = useState({
    username: '',
    email: ''
  })
  // setting initial state of registration data and state to update inputs
  const [registerData, setRegisterData] = useState({
    username: '',
    email: ''
  })

  // handles the user typing into login fields
  const handleLoginChange = (event) => {
    setLoginData({...loginData, [event.target.name]: event.target.value});
  }
  // handles the user typing into registration fields
  const handleRegisterChange = (event) => {
    setRegisterData({...registerData, [event.target.name]: event.target.value});
  }
  // handles login submission
  // prevents form from being submitted without validating inputs first
  const handleLoginSubmit = (event) => {
    event.preventDefault();
  }
  // handles registration submission
  // prevents form from being submitted without validating inputs first
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='user-auth'> 
      <h2>UserAuth</h2>
      <label>Sign In</label>
        <form onSubmit={handleLoginSubmit}>
          <label for="username">Username: </label>
            <input 
              type="text" 
              name="username" 
              required
              value={loginData.username}
              onChange={handleLoginChange}
              /> <br></br>
          <label for="email">Email: </label>
            <input 
              type="text" 
              name="email" 
              required
              value={loginData.email}
              onChange={handleLoginChange}
              /><br></br>
            <input 
              type="submit" 
              value="Sign In" 
              />
        </form>

<br></br>

      <label>Create New User</label>
        <form onSubmit={handleRegisterSubmit}>
          <label for="username">Username: </label>
            <input 
              type="text" 
              name="username" 
              required
              value={registerData.username}
              onChange={handleRegisterChange}
              /> <br></br>
          <label for="email">Email: </label>
            <input 
              type="text" 
              name="email" 
              required
              value={registerData.email}
              onChange={handleRegisterChange}
              /><br></br>
            <input 
              type="submit" 
              value="Register" 
              />
        </form>
    </div>

  )
}
